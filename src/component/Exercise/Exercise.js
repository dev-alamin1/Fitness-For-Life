import React from 'react';
import './Exercise.css';

const Exercise = ({excerciseTime}) => {
    return (
        <div className='exercise'>
            <p className='exercise-title'><strong>Exercise Details</strong></p>

            <div className='exercise-time'>
                <p><strong>Exercise time</strong></p>
                <p>{excerciseTime} seconds</p>
            </div>

            <div className='exercise-time'>
                <p><strong>Break time</strong></p>
                <p>0 seconds</p>
            </div>
        </div>
    );
};

export default Exercise;