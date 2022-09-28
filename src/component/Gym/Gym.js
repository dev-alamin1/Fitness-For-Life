import React, { useEffect, useState } from 'react';
import ActivityButton from '../ActivityButton/ActivityButton';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import Practice from '../Practice/Practice';
import Profile from '../Profile/Profile';
import './Gym.css';

const Gym = () => {

    const [practices,setPractice] = useState([]);

    useEffect(()=>{
          fetch('practice.json')
            .then(res=>res.json())
            .then(data =>setPractice(data));
    },[]);


    // handale add to list button 

     const [excerciseTime, setExerciseTime] = useState(0);
     const handleExeciseTime = (time) => {
         setExerciseTime(excerciseTime + time);
     }

   

    return (
        <div className='gym-practice-container'>
            <div className='gym-practice'>

                {
                    practices.map(practice =><Practice practice={practice} key={practice.id} handleExeciseTime={handleExeciseTime}></Practice>)
                }
            </div>
            
            <div className='gym-other-info'>
                <div className='gym-other-info-container'>
                    <Profile></Profile>
                    <Break></Break>
                    <Exercise excerciseTime={excerciseTime}></Exercise>
                    <ActivityButton></ActivityButton>
                    
                </div>
            </div>
        </div>
    );
};

export default Gym;