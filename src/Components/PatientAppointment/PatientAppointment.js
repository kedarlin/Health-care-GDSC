import React, { useState, useEffect } from 'react';
import './PatientAppointment.css';

const PatientAppointment = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const [appointmentData, setAppointmentData] = useState({
        category: '',
        reason: '',
        preferredDate: '',
        preferredTime: '',
        selectedDoctor: '',
    });

    const [doctors, setDoctors] = useState([
        { id: 'doc1', name: 'Dr. Smith' },
        { id: 'doc2', name: 'Dr. Johnson' },
        // Add more doctors as needed
    ]);

    const [doctorAvailability, setDoctorAvailability] = useState({
        doc1: { availableDates: ['2023-02-01', '2023-02-05'], availableTimes: ['10:00', '14:00'] },
        doc2: { availableDates: ['2023-02-02', '2023-02-04'], availableTimes: ['11:00', '15:00'] },
        // Add more availability as needed
    });

    useEffect(() => {
        // Fetch doctors' data from an API or database (simulated here)
        // In a real-world scenario, you would replace this with actual API calls or database queries.
        // setDoctors([...]); // Simulate fetching doctors from API
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointmentData({
            ...appointmentData,
            [name]: value,
        });
    };

    const handleAppointment = (e) => {
        e.preventDefault();

        // Check availability based on selected doctor's schedule in the local state
        const selectedDoctorSchedule = doctorAvailability[appointmentData.selectedDoctor];

        // Implement your logic to check availability based on selectedDoctorSchedule

        // Assuming availability check is successful for simplicity
        console.log('Appointment Data:', appointmentData);
    };

    return (
        <div className='patient-appointment-container'>
            <h2>Appointment Fixation</h2>
            <form onSubmit={handleAppointment}>
                <div className='patient-appointment-category'>
                    <label>
                        Appointment Category:
                        <select name='category' value={appointmentData.category} onChange={handleChange} required>
                            <option value=''>Select Category</option>
                            <option value='General Health Consultation'>General Health Consultation</option>
                            <option value='Dermatology'>Dermatology</option>
                            <option value='Mental Health'>Mental Health</option>
                            <option value='Nutrition and Diet'>Nutrition and Diet</option>
                            <option value="Women's Health">Women's Health</option>
                            <option value='Pediatrics'>Pediatrics</option>
                            <option value='Orthopedics'>Orthopedics</option>
                            <option value='Internal Medicine'>Internal Medicine</option>
                            <option value='Allergy and Immunology'>Allergy and Immunology</option>
                            <option value='Cardiology'>Cardiology</option>
                            <option value='Endocrinology'>Endocrinology</option>
                            <option value='Gastroenterology'>Gastroenterology</option>
                            <option value='Infectious Diseases'>Infectious Diseases</option>
                            <option value='Ophthalmology'>Ophthalmology</option>
                            <option value='Urology'>Urology</option>
                        </select>
                    </label>
                </div>
                <div className='patient-appointment-reason'>
                    <label>
                        Reason for Appointment:
                        <textarea name='reason' value={appointmentData.reason} onChange={handleChange} required />
                    </label>
                </div>
                <div className='patient-appointment-doctor'>
                    <label>
                        Select Doctor:
                        <select name='selectedDoctor' value={appointmentData.selectedDoctor} onChange={handleChange} required>
                            <option value=''>Select Doctor</option>
                            {doctors.map((doctor) => (
                                <option key={doctor.id} value={doctor.id}>
                                    {doctor.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className='patient-appointment-preferred-date'>
                    <label>
                        Preferred Date:
                        <input type='date' name='preferredDate' min={currentDate} value={appointmentData.preferredDate} onChange={handleChange} required />
                    </label>
                </div>
                <div className='patient-appointment-preferred-time'>
                    <label>
                        Preferred Time:
                        <input type='time' name='preferredTime' value={appointmentData.preferredTime} onChange={handleChange} required />
                    </label>
                </div>
                <button type='submit'>Book Appointment</button>
            </form>
        </div>
    );
};

export default PatientAppointment;
