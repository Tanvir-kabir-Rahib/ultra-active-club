import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';

const Exercises = () => {
    const [exercises, setExercies] = useState([])
    useEffect(() => {
        fetch("exercises.JSON")
            .then(res => res.json())
            .then(data => setExercies(data))
    }, [])
    return (
        <div className='bg-light rounded-5 mt-5'>
            <h3 >Select Today's Exercise</h3>
            <div className='row mt-3'>
                {exercises.map(exercise => <Exercise key={exercise.key} exercise={exercise}></Exercise>)}
            </div>
        </div>
    );
};

export default Exercises;