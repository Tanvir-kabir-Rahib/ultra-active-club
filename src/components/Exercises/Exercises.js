import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Profile from '../Profile/Profile';
import "./Exercies.css"

const Exercises = () => {
    const [exercises, setExercies] = useState([])
    useEffect(() => {
        fetch("exercises.JSON")
            .then(res => res.json())
            .then(data => setExercies(data))
    }, [])
    const [exTime, setExTime] = useState(0)
    const addToList = (time) => {
        setExTime( exTime + time);
    }
    return (
        <div className='page-griding'>
            <div className='bg-light rounded-5 mt-5 mb-5'>
                <h3 >Select Today's Exercise</h3>
                <div className='row mt-3'>
                    {exercises.map(exercise => <Exercise key={exercise.key} exercise={exercise} addToList={addToList}></Exercise>)}
                </div>
            </div>
            <div>
                <Profile exTime={exTime}></Profile>
            </div>
        </div>
    );
};

export default Exercises;