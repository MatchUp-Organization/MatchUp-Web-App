import React, { useState } from 'react';
import './FootballPage.css';
import PageHeader from '../../../layouts/PageHeader';

function FootballPage() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [experience, setExperience] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to server
        console.log({
            name,
            age,
            skillLevel,
            experience,
            gender,
            height
        });
    };

    return (
        <>
            <PageHeader />
            <div className="football-page">
                <h1>Football Page</h1>
                <p>
                    Here you can find general information about getting the chance to play football no matter where you are.
                </p>
                <h2>Player Information</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>
                        Age:
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
                    </label>
                    <label>
                        Skill Level:
                        <select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)} required>
                            <option value="">Select Skill Level</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </label>
                    <label>
                        Experience:
                        <select value={experience} onChange={(e) => setExperience(e.target.value)} required>
                            <option value="">Select Experience Level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="pro">Pro</option>
                        </select>
                    </label>
                    <label>
                        Gender:
                        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <label>
                        Height (cm):
                        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default FootballPage;
