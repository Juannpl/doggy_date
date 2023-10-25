import React from 'react';
import './Field.css';

const Field = () => {
    return (
        <div className='fied'>
            <input className='field_name' type="text" placeholder='Votre adresse mail'/>
        </div>
    );
};

export default Field;