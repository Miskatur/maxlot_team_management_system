/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import AllMembersTable from '../../components/AllMembers/AllMembersTable';
import { FiUserPlus } from 'react-icons/fi';
import AddMember from '../../components/AllMembers/AddMember';
import { useDispatch, useSelector } from 'react-redux';
import useToken from '../../hooks/useToken';
import fetchUser from '../../redux/thunkFunctionalities/fetchUser';

const AllMembers = () => {
   
    const [showModal, setShowModal] = React.useState(false);
    const dispatch = useDispatch()
    const handleModal = () => {
        setShowModal(!showModal);
    };
    const token = useToken()
    useEffect(() => {
        dispatch(fetchUser(token))
    }, [dispatch, token])
    return (
        <div>
            <div>
                <div className='bg-lightBlue py-10 px-6 flex justify-between items-center rounded'>
                    <h1 className='text-7xl text-primary-900 font-bold leading-10 tracking-widest	'>All Members</h1>
                    <button className=' rounded-full px-6 py-2  bg-secondary text-sm text-white flex gap-x-2 items-center justify-center' onClick={handleModal}>
                        <FiUserPlus size={20} />
                        <span>
                            Add Member
                        </span>
                    </button>

                    {
                        showModal && <AddMember
                            showModal={showModal}
                            handleModal={handleModal}
                        />
                    }


                </div>
            </div>
            <div>
                <AllMembersTable />

            </div>
        </div>
    );
};

export default AllMembers;