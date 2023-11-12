/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever } from "react-icons/md";
import { Button, Modal, Tooltip } from 'keep-react';
import deleteAUser from '../../redux/thunkFunctionalities/deleteAUser';
import useToken from '../../hooks/useToken';
const AllMembersTable = () => {
    const users = useSelector(state => state?.allUsers?.users)
    const dispatch = useDispatch()
    const token = useToken()

    const [showErrorModalX, setShowErrorModalX] = React.useState(Array(users?.length).fill(false));
    const onClickErrorModal = (index) => {
        const newShowErrorModal = [...showErrorModalX];
        newShowErrorModal[index] = !newShowErrorModal[index];
        setShowErrorModalX(newShowErrorModal);
    };

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
                            <th className="p-3">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.sort((a, b) => a._id - b._id).map((user, index) => {
                                const { username, role, _id } = user;
                                return (

                                    <tr key={index} className="border-b border-opacity-20 border-gray-300 bg-lightGray/30">
                                        <td className="p-3">
                                            <p>{index + 1}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{username}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{role}</p>
                                        </td>
                                        {/* <td className="p-3">
                                            <p>01 Feb 2022</p>

                                        </td> */}
                                        <td className="p-3 cursor-pointer">
                                            <Tooltip
                                                content="Delete"
                                                trigger="hover"
                                                placement="bottom-end"
                                                animation="duration-300"
                                                style="dark"
                                            >
                                                <p className=''
                                                    onClick={() => onClickErrorModal(index)}>
                                                    <MdDeleteForever size={24} color='red' />
                                                </p>
                                            </Tooltip>
                                            {
                                                showErrorModalX[index] && <Modal
                                                    size="md"
                                                    show={showErrorModalX[index]}
                                                    onClose={() => onClickErrorModal(index)}
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
                                                        <Button type="outlineGray" onClick={() => onClickErrorModal(index)}>
                                                            Cancel
                                                        </Button>
                                                        <Button type="primary" color="error"
                                                            onClick={() =>
                                                                dispatch(deleteAUser(_id, token, onClickErrorModal, index))}>
                                                            Delete
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            }
                                        </td>

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

export default AllMembersTable;