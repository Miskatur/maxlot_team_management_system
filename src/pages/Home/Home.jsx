/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CreateTeamModal from '../../components/CreateTeam/CreateTeamModal';
import { useDispatch, useSelector } from 'react-redux';
import fetchTeams from '../../redux/thunkFunctionalities/fetchTeams';
import SingleTeam from '../../components/HomeComponents/SingleTeam';
import useToken from '../../hooks/useToken';

const Home = () => {
    const token = useToken()
    const [teamsData, setTeamsData] = useState()
    const teams = useSelector((state) => state.teams.allTeams)
    const user = useSelector((state) => state.user.user)
    const { _id, role } = user
    console.log('teams', teams);
    useEffect(() => {
        if (role === 'teamMember') {
            const filteredTeams = teams.filter((team) =>
                team.members.some((member) => member._id === _id)
            );
            setTeamsData(filteredTeams)
        } else {
            setTeamsData(teams)
        }
    }, [role, teams, _id])


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTeams(token))
    }, [dispatch, token])

    return (
        <div className='my-5'>
            <div className='px-5 py-10 bg-lightBlue rounded-lg flex flex-col lg:flex-row items-center justify-between'>
                <h1 className='text-primary-900 text-3xl font-semibold'>Team Creation Management System</h1>
                {
                    role === 'admin' &&
                    <div>
                        <CreateTeamModal token={token} />
                    </div>
                }
            </div>
            <div className='mt-5 px-5 py-10 bg-lightBlue rounded-lg '>
                <div className='grid sm:grid-cols-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                    {
                        teamsData?.map((team) => {
                            return <div key={team?._id}>
                                <SingleTeam team={team} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;