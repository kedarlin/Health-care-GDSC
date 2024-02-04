import React from 'react'
import './PatientDashboard.css';
import Header from '../../Components/Header/Header';
import { useNavigate } from 'react-router-dom';


const PatientDashboard = () => {

    const navigate=useNavigate();
    
    const handleBookAppointment = () =>{
        navigate('/Patient');
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
            </div>
        </div>
    );
}

export default PatientDashboard;