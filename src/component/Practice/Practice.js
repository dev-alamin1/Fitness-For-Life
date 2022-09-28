import React from 'react';
import './Practice.css';

const Practice = (props) => {
    const {practice,handleExeciseTime}=props;
    const {image,title,time} = practice;
   
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={image} alt="" />
            </div>

            <div className='practice-info'>
                <p>{title}</p>
                <p>Time : {time} sec</p>
            </div>

            <div>
                <button onClick={()=>handleExeciseTime(time)} className='addtolist-button'>Add To list</button>
            </div>
        </div>
    );
};

export default Practice;