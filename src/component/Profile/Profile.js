import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='avatar-section'>
                <img className='avatar' src="me.png" alt="" />
                <div className='user-info'>
                    <p className='user-name'><strong>Al-amin Mondal</strong></p>
                    <small>Dhaka,Bangladesh</small>
                </div>
            </div>

            <div className='user-extra-info'>
                <div>
                    <p><strong>60kg</strong></p>
                    <p>Weight</p>
                </div>
                <div>
                    <p><strong>5.5</strong></p>
                    <p>height</p>
                </div>
                <div>
                    <p><strong>24yrs</strong></p>
                    <p>Old</p>
                </div>
            </div>
            
        </div>
    );
};

export default Profile;