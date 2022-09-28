import React, { useEffect, useState } from 'react';
import Practice from '../Practice/Practice';
import './Gym.css';

const Gym = () => {

    const [practices,setPractice] = useState([]);

    useEffect(()=>{
          fetch('practice.json')
            .then(res=>res.json())
            .then(data =>setPractice(data));
    },[]);

    return (
        <div className='gym-practice-container'>
            <div className='gym-practice'>

                {
                    practices.map(practice =><Practice practice={practice} key={practice.id}></Practice>)
                }
            </div>
            
            <div className='gym-other-info'>
                <h2>Other info</h2>
            </div>
        </div>
    );
};

export default Gym;