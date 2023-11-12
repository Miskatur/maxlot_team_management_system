/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import teamImage from '../../assets/SingleTeamAssets/team.png'
import { Link } from 'react-router-dom';
import { Tooltip } from 'keep-react';
const SingleTeam = ({ team }) => {
    const { category, description, name, _id } = team;
    return (
        <Link to={`team/${_id}`}>
            <div className='border border-textColor/50 shadow bg-white min-h-fit rounded-lg hover:scale-[1.02] duration-300 ease-in-out cursor-pointer hover:shadow-xl text-gray-900'>
                <div className='flex justify-center items-center px-2 py-2'>
                    <img src={teamImage} alt="team logo" className='w-32 h-32' />
                </div>
                <hr />
                <div className='px-4 py-2 h-16'>
                    <h1 className='text-lg font-semibold'>
                        {name?.substring(0, 15)}
                    </h1>
                    <p className='text-sm '>
                        {category?.substring(0, 25)}
                    </p>
                </div>
                <hr />
                <div className='py-2 px-2 h-20'>
                    <Tooltip
                        content={description}
                        trigger="hover"
                        placement="bottom-end"
                        animation="duration-300"
                        // style="light"
                        className='bg-white'
                    >
                        <h5 className='text-sm'>{description.substring(0, 20)}</h5>
                    </Tooltip>
                </div>
            </div>
        </Link>
    );
};

export default SingleTeam;