import React from 'react';
import './Backdrop.css';

function Backdrop({show, click}) {
    return show && (
        <div className='backdrop' onClick={click}>
            <ul className="sidedrawer" onClick={click}>
                
            </ul>
        </div>
    );
}

export default Backdrop;