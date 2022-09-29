import React from 'react';
import "./Profile.css"
import profile from "../../images/PSX_20190311_202001-01.jpeg"
import Break from '../Break/Break';

const Profile = () => {
    return (
        <div>
            <div className='d-flex align-items-center mb-5'>
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
            <Break></Break>
            <div className='mt-5'>
                <h3>Exercise Details</h3>
                <div>

                </div>
                <div>

                </div>
            </div>
            <button className="btn btn-lg btn-primary mt-5">
                Activity Completed
            </button>

        </div>
    );
};

export default Profile;