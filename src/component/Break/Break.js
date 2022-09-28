import React from 'react';
import './Break.css';

const Break = () => {
    return (
        <div className='break'>
            <p className='break-title'><strong>Add A Break</strong></p>
            <div className='break-info'>
                <div>
                    <p><strong>10s</strong></p>
                </div>
                <div>
                    <p><strong>20s</strong></p>
                </div>
                <div>
                    <p><strong>30s</strong></p>
                </div>
                <div>
                    <p><strong>40s</strong></p>
                </div>
            </div>
            
        </div>
    );
};

export default Break;