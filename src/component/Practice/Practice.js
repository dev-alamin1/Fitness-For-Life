import React from 'react';
import './Practice.css';

const Practice = (props) => {
    const {practice,handleExeciseTime}=props;
    const {image,title,time,desc} = practice;
   
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={image} alt="" />
            </div>

            <div className='practice-info'>
                <p className='practice-hightlight'>{title}</p>
                <p className='desc'>{desc}</p>
                <p> <span className='practice-hightlight'>Time Required :</span> {time} sec</p>
            </div>

            <div>
                <button onClick={()=>handleExeciseTime(time)} className='addtolist-button'>Add To list</button>
            </div>
        </div>
    );
};

export default Practice;