import React from 'react';
import "./Profile.css"
import profile from "../../images/PSX_20190311_202001-01.jpeg"
import Break from '../Break/Break';

const Profile = () => {
    return (
        <div>
            <div className='person-data'>
                <img className='profile' src={profile} alt="" />
                <div>
                    <h2 className='person-name'> Tanvir Kabir</h2>
                    <p className='location'>Khulna, Bangladesh</p>
                </div>
            </div>
            <h3>Add A Break</h3>
            <Break></Break>
            <div>
                <h3>Exercise Details</h3>
                <div>

                </div>
                <div>

                </div>
            </div>
            <button className="btn btn-lg btn-primary">
                Activity Completed
            </button>

        </div>
    );
};

export default Profile;