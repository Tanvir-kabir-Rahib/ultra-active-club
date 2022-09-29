import React from 'react';
import "./Break.css"

const Break = () => {
    const breakHandler = () => {
        
    }
    return (
        <div className='breaks d-flex flex-wrap flex-wrap justify-content-around align-items-center py-2 px-1 me-1 rounded'>
            <p className='mb-0 bg-white p-2 rounded-circle'>10s</p>
            <p className='mb-0 bg-white p-2 rounded-circle'>20s</p>
            <p className='mb-0 bg-white p-2 rounded-circle'>30s</p>
            <p className='mb-0 bg-white p-2 rounded-circle'>40s</p>
            <p className='mb-0 bg-white p-2 rounded-circle'>50s</p>
            <p className='mb-0 bg-white p-2 rounded-circle'>60s</p>
        </div>
    );
};

export default Break;