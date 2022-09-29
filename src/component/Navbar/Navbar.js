import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                 <h2 className='website-title'><FontAwesomeIcon style={{marginRight:'5px'}} icon={faDumbbell} /> Fitness For Life</h2>
                    <p>Select todys Exercise</p>
            </nav>
        </div>
    );
};

export default Navbar;