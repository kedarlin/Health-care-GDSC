import React, { useState } from "react";
import './Patient.css';
import Header from '../../Components/Header/Header';
import PatientSideBar from "../../Components/PatientSideBar/PatientSideBar";
import PersonalDetails from "../../Components/PersonalDetails/PersonalDetails";
import PatientAppointment from "../../Components/PatientAppointment/PatientAppointment";

const Patient = () => {
    const [activeSection, setActiveSection] = useState('personal-details');

    const sectionComponents = {
        'personal-details': <div className="patient-book-container"><PersonalDetails /></div>,
        'search-doctors': <div className="patient-book-container"><PatientAppointment /></div>,
        'appointment': <div className="patient-book-container">Appointment Content</div>,
        'previous-records': <div className="patient-book-container">Previous Records Content</div>
    };

    const handleSidebarClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div>
            <Header />
            <div className="patient-container">
                <div className="sidebar-container">
                    <PatientSideBar onSidebarClick={handleSidebarClick} />
                </div>
                <div className="content-container">
                    {sectionComponents[activeSection]}
                </div>
            </div>
        </div>
    );
}

export default Patient;
