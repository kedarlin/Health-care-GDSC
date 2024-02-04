import React from "react";
import './Home.css';
import Header from '../../Components/Header/Header';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handlePatientLogin = () => {
        navigate('/patient-dashboard');
    };

    const handleDoctorLogin = () => {
        navigate('/doctor-dashboard');
    };

    return (
        <div className="home-container">
            <Header />
            <div className="home-main">
                <div className="home-flex">
                    <img src={require('../../Assets/cdc-vt7iAyiwpf0-unsplash.jpg')} alt="home-patient-care-img" className="home-patient-care-img" />
                    <div className="home-login-buttons">
                        <button className="home-patient-login" onClick={handlePatientLogin}>Patient Login</button>
                        <button className="home-doctor-login" onClick={handleDoctorLogin}>Doctor Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
