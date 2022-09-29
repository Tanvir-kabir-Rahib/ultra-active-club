import React from 'react';
import "./Break.css"

const Break = () => {
    const breakHandler = () => {

    }
    return (
        <div className='breaks bg-secondary rounded'>
            <p className='bg-white p-2 rounded-circle'>10s</p>
            <p className='bg-white p-2 rounded-circle'>20s</p>
            <p className='bg-white p-2 rounded-circle'>30s</p>
            <p className='bg-white p-2 rounded-circle'>40s</p>
            <p className='bg-white p-2 rounded-circle'>50s</p>
            <p className='bg-white p-2 rounded-circle'>60s</p>
        </div>
    );
};

export default Break;