import React, { useEffect, useState } from 'react';

const Exercises = () => {
    const [exercises, setExercies] = useState([])
    useEffect(()=>{
        fetch("../../fakeData/exercises.JSON")
        .then(res => res.json())
        .then(data => {
            setExercies(data)
        })
    },[])
    return (
        <div className='bg-light rounded-5'>
            <h3>Select Today's Exercise</h3>
            <div>

            </div>
        </div>
    );
};

export default Exercises;