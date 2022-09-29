import React, { useState } from 'react';
import "./Profile.css"
import profile from "../../images/PSX_20190311_202001-01.jpeg"
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Profile = (props) => {
    const { exTime } = props
    const breaks = [10, 20, 30, 40, 50, 60];
    const getStoredTime = () => {
        const exists = localStorage.getItem('break_time');
        return exists ? JSON.parse(exists) : 0;
      }
      
    const [breakTime, setBreakTime] = useState(getStoredTime())
    const breakHandler = (time) => {
        localStorage.setItem("break_time", JSON.stringify(time));
        const storedTime = localStorage.getItem("break_time");
        setBreakTime(JSON.parse(storedTime))
    }
    const toastify = () => {
        toast("You Did It")
    }
    return (
        <div className='px-2'>
            <div className='d-flex align-items-center mb-4'>
                <img className='profile' src={profile} alt="" />
                <div>
                    <h4 className='mb-0'> Tanvir Kabir</h4>
                    <p className='mb-0 text-secondary'>Khulna, Bangladesh</p>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-evenly back-ground py-3 rounded mb-5'>
                <div className='bg-light rounded-circle detail'>
                    <p className='mb-0 text-center fw-semibold'>75<sub>kg</sub></p>
                    <p className='mb-0 text-center fw-semibold'>Weight</p>
                </div>
                <div className='bg-light rounded-circle detail'>
                    <p className='mb-0 text-center fw-semibold'>5.7<sub>Feet</sub></p>
                    <p className='mb-0 text-center fw-semibold'>Height</p>
                </div>
                <div className=" bg-light rounded-circle detail">
                    <p className='mb-0 text-center fw-semibold'>17<sub>yrs</sub></p>
                    <p className='mb-0 text-center fw-semibold'>Age</p>
                </div>
            </div>
            <h3 className='mb-3'>Add A Break</h3>
            <div className='breaks d-flex flex-wrap justify-content-around align-items-center py-2 px-1 rounded back-ground'>
                {breaks.map(b => <button className='mb-0 bg-white p-2 rounded-circle border border-0' onClick={() => breakHandler(b)}>{b}</button>)}
            </div>
            <div className='mt-5'>
                <h3 className='mb-4'>Exercise Details</h3>
                <div className='d-flex align-items-center justify-content-between back-ground p-3 rounded-3 mb-4'>
                    <p className='mb-0 fw-bolder'>Exercise time</p>
                    <p className='mb-0 fw-bolder text-secondary'><span>{exTime} </span><span>minutes</span></p>
                </div>
                <div className='d-flex align-items-center justify-content-between back-ground p-3 rounded-3 mb-4'>
                    <p className='mb-0 fw-bolder'>Break Time</p>
                    <p className='mb-0 fw-bolder text-secondary'><span>{breakTime} </span><span>seconds</span></p>
                </div>
            </div>
            <div className='text-center'>
                <button onClick={() => toastify()} className="btn btn-primary mt-4">
                    Activity Completed
                </button>
            </div>

        </div>
    );
};

export default Profile;