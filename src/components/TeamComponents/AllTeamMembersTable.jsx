/* eslint-disable react/prop-types */
import { Button, Modal, Tooltip } from 'keep-react';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import removeAUserFromATeam from '../../redux/thunkFunctionalities/removeAUserFromATeam';
import useToken from '../../hooks/useToken';

const AllTeamMembersTable = ({ teamData, id }) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
    const { role } = user
    const [showErrorModalX, setShowErrorModalX] = React.useState(false);
    const onClickErrorModal = () => {
        setShowErrorModalX(!showErrorModalX);
    };
    const token = useToken()

    const unAssignedAUser = (userId) => {
        dispatch(removeAUserFromATeam(id, userId, token, onClickErrorModal))
    }

    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-800 ">
            <h2 className="mb-4 text-2xl font-semibold leading">Members</h2>
            <div className="overflow-x-auto rounded">
                <table className="min-w-full text-sm ">
                    <thead className="bg-primary-100">
                        <tr className="text-left">
                            <th className="p-3">SL.</th>
                            <th className="p-3">Username</th>
                            <th className="p-3">Role</th>
                            {/* <th className="p-3">Team</th> */}
                            {
                                role === 'admin' &&
                                <th className="p-3">Delete</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teamData?.members?.map((user, index) => {
                                const { username, _id } = user;
                                return (

                                    <tr key={index} className="border-b border-opacity-20 border-gray-300 bg-lightGray/30">
                                        <td className="p-3">
                                            <p>{index + 1}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{username}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{user?.role}</p>
                                        </td>
                                        {/* <td className="p-3">
                                        <p>01 Feb 2022</p>

                                    </td> */}
                                        {
                                            role === 'admin' ?
                                                <td className="p-3 cursor-pointer">
                                                    <Tooltip
                                                        content="Delete"
                                                        trigger="hover"
                                                        placement="bottom-end"
                                                        animation="duration-300"
                                                        style="dark"
                                                    >
                                                        <p className=''
                                                            onClick={onClickErrorModal}>
                                                            <MdDeleteForever size={24} color='red' />
                                                        </p>
                                                    </Tooltip>
                                                    {
                                                        showErrorModalX && <Modal
                                                            size="md"
                                                            show={showErrorModalX}
                                                            onClose={onClickErrorModal}
                                                        >
                                                            <Modal.Header>Do you want to delete this user?</Modal.Header>
                                                            <Modal.Body>
                                                                <div className="space-y-6">
                                                                    <p className="text-base leading-relaxed text-slate-500">
                                                                        Deleted user can not be retained again. Still want to delete this user?
                                                                    </p>
                                                                </div>
                                                            </Modal.Body>
                                                            <Modal.Footer >
                                                                <Button type="outlineGray" onClick={onClickErrorModal}>
                                                                    Cancel
                                                                </Button>
                                                                <Button type="primary" color="error"
                                                                    onClick={() => unAssignedAUser(_id)}
                                                                >
                                                                    Delete
                                                                </Button>
                                                            </Modal.Footer>
                                                        </Modal>
                                                    }
                                                </td>
                                                :
                                                null
                                        }

                                    </tr>
                                )
                            })
                        }



                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllTeamMembersTable;