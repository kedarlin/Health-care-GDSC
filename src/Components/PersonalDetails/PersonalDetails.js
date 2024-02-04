import React, { useState } from 'react';
import './PersonalDetails.css';

const PersonalDetails = () => {

    const currentDate = new Date().toISOString().split('T')[0];

    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        dob: '',
        address: '',
        phone: '',
        email: '',
        photo: null,
        bloodGroup: '',
        medicalHistory: {
            heartAttack: false,
            diabetes: false,
            highBloodPressure: false,
            allergies: false,
        },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                medicalHistory: {
                    ...formData.medicalHistory,
                    [name]: checked,
                },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            photo: file,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className='personal-details-container'>
            <div className='personal-details-head'>Enter Your Details</div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' name='name' value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Gender:
                    <select name='gender' value={formData.gender} onChange={handleChange} required>
                        <option value=''>Select Gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                    </select>
                </label>
                <br />
                <label>
                    Date of Birth:
                    <input type='date' name='dob' value={formData.dob} max={currentDate} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Address:
                    <textarea name='address' value={formData.address} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Phone:
                    <input type='tel' name='phone' value={formData.phone} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type='email' name='email' value={formData.email} onChange={handleChange} required />
                </label>
                <br />
                <label className='label-container'>
                    Photo:
                    <label className='file-input-label'>
                        <span>Choose a file</span>
                        <input type='file' name='photo' onChange={handleFileChange} accept='image/*' className='photo-input' />
                    </label>
                    {formData.photo && <img src={URL.createObjectURL(formData.photo)} alt='Preview' className='photo-preview' />}
                </label>
                <br />
                <label>
                    Blood Group:
                    <input type='text' name='bloodGroup' value={formData.bloodGroup} onChange={handleChange} required />
                </label>
                <br />
                <>Medical History:</>
                <div className='medical-history'>
                    <label>
                        <div className='medical-history-item'>
                            <label>
                                <input
                                    type='checkbox'
                                    name='heartAttack'
                                    checked={formData.medicalHistory.heartAttack}
                                    onChange={handleChange}
                                />
                                Heart Attack
                            </label>
                        </div>
                        <div className='medical-history-item'>
                            <label>
                                <input
                                    type='checkbox'
                                    name='diabetes'
                                    checked={formData.medicalHistory.diabetes}
                                    onChange={handleChange}
                                />
                                Diabetes
                            </label>
                        </div>
                        <div className='medical-history-item'>
                            <label>
                                <input
                                    type='checkbox'
                                    name='highBloodPressure'
                                    checked={formData.medicalHistory.highBloodPressure}
                                    onChange={handleChange}
                                />
                                High Blood Pressure
                            </label>
                        </div>
                        <div className='medical-history-item'>
                            <label>
                                <input
                                    type='checkbox'
                                    name='allergies'
                                    checked={formData.medicalHistory.allergies}
                                    onChange={handleChange}
                                />
                                Allergies
                            </label>
                        </div>
                    </label>
                </div>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default PersonalDetails;
