import React from 'react'
import './PatientDashboard.css';
import Header from '../../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const PatientDashboard = () => {

    const navigate=useNavigate();
    
    const handleBookAppointment = () =>{
        navigate('/Patient');
    }
    const handleLogout = async () => {
        try {
            const auth = getAuth();
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error.message);
        }
    }
    return (
        <div className='patient-dash-container'>
            <Header />
            <div className='patient-dash-main'>
                <img src={require('../../Assets/cdc-vt7iAyiwpf0-unsplash.jpg')} alt='patient-dash-img' className='patient-dash-img' />
                <div className='patient-dash-book'>
                    <div className='patient-dash-book-head'>Book an Appointment!</div>
                    <div className='patient-dash-book-desc'>Can't reach Doctors right away?<br />Book an Appointment from Your Home<br />And Consult Doctors Online!</div>
                    <button className='patient-dash-book-button' onClick={handleBookAppointment}>BOOK</button>
                </div>
                <button className='patient-dash-logout-button' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default PatientDashboard;