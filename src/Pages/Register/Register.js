import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [userRole, setUserRole] = useState('');

    const handleRegister = async () => {

        if (email === '') {
            toast.error('Email is Required!');
            return;
        }
        if (password === '' || confirmPassword === '') {
            toast.error('Enter Password field!');
            return;
        }
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

        if (!emailRegex.test(email)) {
            toast.error('Enter correct Email ID');
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            toast.success('Registered Successfully! Check your email for verification.');
            navigate('/login');
        } catch (error) {
            console.error('Registration failed', error.message);
            toast.error('Registration failed. Please try again.');
        }
    };


    return (
        <div className="register-view">
            <ToastContainer />
            <h2 className="register-text">REGISTER</h2>
            <div className="register-input-container">
                <FontAwesomeIcon icon={faEnvelope} className="register-icon" />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="register-input"
                />
            </div>
            <div className="register-input-container">
                <FontAwesomeIcon icon={faLock} className="register-icon" />
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="register-input"
                />
                <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="register-icon"
                    onClick={() => setShowPassword(!showPassword)}
                />
            </div>

            <div className="register-input-container">
                <FontAwesomeIcon icon={faLock} className="register-icon" />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="register-input"
                />
            </div>
            <button className="register-btn" onClick={handleRegister}>
                Register
            </button>
            <p className="register-dont">
                Already have an account?{' '}
                <span className="register-loginText" onClick={() => navigate('/login')}>Login here</span>
            </p>
        </div>
    );
};

export default Register;
