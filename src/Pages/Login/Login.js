import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase_config';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(app);

  // useEffect to check if the user is already logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is already logged in, redirect to the dashboard
        navigate('/patient-dashboard');
      }
    });

    // Clean up the subscription when the component is unmounted
    return () => unsubscribe();
  }, [auth, navigate]);

  const handleLogin = async () => {
    try {
      if (!email.trim() || !password.trim()) {
        toast.error('Please enter both email and password.');
        return;
      }

      if (password.length < 6) {
        toast.error('Password should be at least 6 characters.');
        return;
      }

      // Sign in with Firebase authentication
      await signInWithEmailAndPassword(auth, email, password);

      toast.success('Login Successful!');
      handleRedirectBasedOnRoles(['SOC Level 1']);
    } catch (error) {
      console.error('Login failed', error.message);
      toast.error('Login failed. Check your credentials.');
    }
  };

  const handleRedirectBasedOnRoles = (userRoles) => {
    navigate('/patient-dashboard');
  };
    return (
        <div className='login-view'>
            <ToastContainer />
            <h2 className='login-text'>LOGIN</h2>
            <div className='login-input-container'>
                <FontAwesomeIcon icon={faEnvelope} className='login-icon' />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='login-input'
                />
            </div>
            <div className='login-input-container'>
                <FontAwesomeIcon icon={faLock} className='login-icon' />
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='login-input'
                />
                <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className='login-icon'
                    onClick={() => setShowPassword(!showPassword)}
                />
            </div>
            <button className='login-button' onClick={handleLogin}>
                Login
            </button>
            <p className='login-dont'>
                Don't have an account?{' '}
                <span className='login-register' onClick={() => navigate('/register')}>Register here</span>
            </p>
        </div>
    );
};

export default Login;