import React, { useEffect } from 'react';
import banner from '../../assets/Team/teamBanner.png'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineEdit, AiOutlineSafetyCertificate } from 'react-icons/ai';
import EditTeamModal from '../../components/TeamComponents/EditTeamModal';
import fetchSingleTeam from '../../redux/thunkFunctionalities/fetchSingleTeam';
import useToken from '../../hooks/useToken';
import AssignMemberModal from '../../components/TeamComponents/AssignMemberModal';
import fetchUser from '../../redux/thunkFunctionalities/fetchUser';
import AllTeamMembersTable from '../../components/TeamComponents/AllTeamMembersTable';
import { TbTargetArrow } from "react-icons/tb";
const Team = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const teamData = useSelector((state) => state.teams.singleTeam)
    const { name, category, description } = teamData;
    const user = useSelector((state) => state.user.user)
    const { role } = user
    const [showModal, setShowModal] = React.useState(false);
    const [showAssignModal, setShowAssignModal] = React.useState(false);

    const handleModal = () => {
        setShowModal(!showModal);
    };

    const handleAssignModal = () => {
        setShowAssignModal(!showAssignModal)
    }
    const token = (useToken());
    useEffect(() => {
        dispatch(fetchSingleTeam(id, token, navigate))
    }, [dispatch, id, token, navigate])

    useEffect(() => {
        dispatch(fetchUser(token))
    }, [dispatch, token])

    return (
        <div>
            <div className='h-52 bg-center bg-cover bg-no-repeat rounded' style={{ backgroundImage: `url(${banner})` }}>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <div>
                    <h1 className='text-5xl font-bold mt-3 text-primary-900'>{name}</h1>
                    <p className='text-lg flex items-center justify-start gap-x-1'>
                        <span>
                            <AiOutlineSafetyCertificate size={24} />
                        </span>
                        {category}
                    </p>
                    <p className='flex gap-x-1 mt-2'>
                        <TbTargetArrow size={24}/>
                        <span>
                            {description}</span>
                    </p>
                </div>
                {
                    role === 'admin' &&
                    <div className='flex gap-x-2'>
                        <button className=' rounded-full px-6 py-2  bg-secondary text-sm text-white flex gap-x-2 items-center justify-center' onClick={handleAssignModal}>
                            <FiUserPlus size={20} />
                            Assign Member</button>
                        <button className=' rounded-full px-6 py-2  bg-secondary text-sm text-white flex gap-x-2 items-center justify-center' onClick={handleModal}>
                            <AiOutlineEdit size={20} />
                            Edit Team</button>

                        {
                            showModal && <EditTeamModal teamData={teamData} showModal={showModal} handleModal={handleModal} />
                        }
                        {
                            showAssignModal && <AssignMemberModal showAssignModal={showAssignModal} handleAssignModal={handleAssignModal} id={id} />
                        }
                    </div>
                }
            </div>

            <div>
                <AllTeamMembersTable teamData={teamData} id={id} />
            </div>

        </div>
    );
};

export default Team;