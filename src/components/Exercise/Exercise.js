import React from 'react';
import "./Exercise.css"

const Exercise = (props) => {
    const {name, img_url, time } = props.exercise
    return (
        <div className=' col-12 col-lg-4'>
            <div class="card mb-3">
                <img className='ex-img img-fluid' src={img_url} alt="" />
                <div class="card-body m-3 p-0">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Time reuired: <span className='fw-bolder'>{time}</span> min</p>
                </div>
                <button onClick={() => props.addToList(time)} className='btn btn-primary rounded-2 m-3'>Add to List</button>
            </div>
        </div>
    );
};

export default Exercise;