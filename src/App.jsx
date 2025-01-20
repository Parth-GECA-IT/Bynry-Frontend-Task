import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Navbar from './Components/Navbar';
import './App.css';

const App = () => {
    const [profiles, setProfiles] = useState([]); // Profiles data
    const [selectedProfile, setSelectedProfile] = useState(null); // Selected profile for the map
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    

    useEffect(() => {
        // Fetch initial profile data from the backend or use dummy data
        setLoading(true);
        setProfiles([
            {
                id: 1,
                name: 'Parth',
                description: 'Software Engineer',
                photo: 'https://media.istockphoto.com/id/1062439436/photo/i-know-ill-get-to-that-milestone.jpg?s=612x612&w=0&k=20&c=13QATNeGy55dYZNSsLAKeIs-OAErtekKCDJYRhSeuRw=',
                address: '1600 Amphitheatre Parkway, Mountain View, CA',
                coordinates: { lat: 21.100949612075635, lng: 79.07435751451227 },
            },
            {
                id: 2,
                name: 'John Doe',
                description: 'Software Engineer',
                photo: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
                address: '1600 Amphitheatre Parkway, Mountain View, CA',
                coordinates: { lat: 37.4221, lng: -122.0841 },
            },
            {
                id: 3,
                name: 'Jane Smith',
                description: 'Data Scientist',
                photo: 'https://media.istockphoto.com/id/1186079153/photo/hell-stay-until-he-has-it-all-figured-out.jpg?s=612x612&w=0&k=20&c=OK2bPjppdTpV9JPMmAua9gNMQnY_PObdkzmKWFj8Pmg=',
                address: '1 Hacker Way, Menlo Park, CA',
                coordinates: { lat: 37.4847, lng: -122.1484 },
            },
        ]);
        setLoading(false);
    }, []);

    const handleProfileClick = (profile) => {
        setSelectedProfile(profile);
    };

    const filteredProfiles = profiles.filter((profile) =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <Navbar/>
            <header className="header">
                
                <h1>Profile Explorer</h1>
                <input
                    type="text"
                    placeholder="Search profiles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </header>

            <main className="main">
                <div className="profile-list">
                    {filteredProfiles.map((profile) => (
                        <div className="profile-card" key={profile.id}>
                            <img src={profile.photo} alt={profile.name} />
                            <h3>{profile.name}</h3>
                            <p>{profile.description}</p>
                            <button onClick={() => handleProfileClick(profile)}>Summary</button>
                        </div>
                    ))}
                </div>

                <div className="map-container">
                    {loading ? (
                        <p className='loading'>Loading...</p>
                    ) : selectedProfile ? (
                        <div style={{ width: "80vw", height: "80vh" }} className="mapbox">
                            <GoogleMapReact

                                bootstrapURLKeys={{ key: 'AIzaSyBlM7uOLIvbJ_XETLm5w6Qph8q7PRvuzfM' }}
                                defaultCenter={selectedProfile.coordinates}
                                defaultZoom={18}
                            >
                                <div
                                    lat={selectedProfile.coordinates.lat}
                                    lng={selectedProfile.coordinates.lng}
                                    className="map-marker"
                                >
                                    📍
                                </div>
                            </GoogleMapReact>
                        </div>
                    ) : (
                        <p>Select a profile to see its location on the map.</p>
                    )}
                </div>
            </main>
            
        </div>
        
    );
};

export default App;