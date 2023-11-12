/* eslint-disable react/prop-types */
import { Avatar, Modal } from 'keep-react';
import React, { useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import useToken from '../../hooks/useToken';
import fetchUser from '../../redux/thunkFunctionalities/fetchUser';
import { FiUserPlus } from 'react-icons/fi';
import addUserToATeam from '../../redux/thunkFunctionalities/addUserToATeam';

const AssignMemberModal = ({ showAssignModal, handleAssignModal, id }) => {

    const dispatch = useDispatch()
    const token = useToken()

    useEffect(() => {
        dispatch(fetchUser(token))
    }, [dispatch, token])

    const users = useSelector(state => state?.allUsers?.users)

    const [searchValue, setSearchValue] = React.useState('')
    const [filteredUsers, setFilteredUsers] = React.useState([]);

    useEffect(() => {
        const filteredUsers = users?.filter(
            user => user?.username?.toLowerCase().includes(searchValue?.toLowerCase())
        );
        setFilteredUsers(filteredUsers || []);
    }, [users, searchValue]);

    const addUserToTheTeam = (userId) => {
        dispatch(addUserToATeam(id, userId, token, handleAssignModal))
    }

    return (
        <Modal className="p-0"
            size="md"
            show={showAssignModal}
            position="center"

        >
            <div className='bg-secondary border-secondary border px-5 py-5 text-white rounded-t-lg flex justify-between items-center'>
                <h1 className='text-xl font-semibold'>
                    Edit Team Information
                </h1>
                <span>
                    <AiOutlineCloseCircle size={28}
                        onClick={() => handleAssignModal()} />
                </span>
            </div>

            <div className='p-4 border-secondary border rounded-b-lg'>
                <div className="form-control w-full mt-2">
                    <label>Search Name</label>
                    <input
                        type="text"
                        name='search'
                        defaultValue={searchValue}
                        placeholder='Search username'
                        className="px-3 py-2 border-secondary border outline-none rounded-lg  text-black mt-1 w-[330px]  "
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    {
                        searchValue?.length > 0 &&
                        <div className="mt-1 absolute bg-white rounded-lg max-h-96 pb-2 overflow-y-auto">
                            <div>
                                {filteredUsers?.map(user => (
                                    <div key={user.id} className='py-1 px-3 border border-secondary w-[330px] z-50  items-center rounded my-1  flex justify-between'>
                                        <div className='flex gap-x-2 items-center'>
                                            <Avatar size={'sm'} />
                                            <span className='text-lg'>   {user.username}</span>
                                        </div>
                                        <div onClick={() => addUserToTheTeam(user?._id)} className='cursor-pointer'>
                                            <FiUserPlus size={18} />
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    }

                </div>



                <div className='flex gap-x-2 justify-end items-center mt-5'>

                    <button className='inline-block rounded-full px-6 py-2 text-sm border border-secondary text-secondary '
                        type="button"
                        onClick={() => handleAssignModal()}>
                        Cancel
                    </button>





                </div>
            </div>
        </Modal>
    );
};

export default AssignMemberModal;