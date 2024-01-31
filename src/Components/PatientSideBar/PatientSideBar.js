import React from "react";
import './PatientSideBar.css';

const PatientSideBar = ({ onSidebarClick }) => {
    return (
        <div className="PatientSideBar-container">
            <div className="patient-personal" onClick={() => onSidebarClick('personal-details')}>Personal Details</div>
            <div className="patient-personal" onClick={() => onSidebarClick('search-doctors')}>Search Doctors</div>
            <div className="patient-personal" onClick={() => onSidebarClick('appointment')}>Appointment</div>
            <div className="patient-personal" onClick={() => onSidebarClick('previous-records')}>Previous Records</div>
        </div>
    );
}

export default PatientSideBar;