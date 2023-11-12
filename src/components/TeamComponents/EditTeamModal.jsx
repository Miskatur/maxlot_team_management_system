/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Modal } from 'keep-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import updateTeamInfo from '../../redux/thunkFunctionalities/updateTeamInfo';
import { useDispatch, useSelector } from 'react-redux';

const EditTeamModal = ({ teamData, showModal, handleModal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { _id, name, category, description } = teamData;
    const dispatch = useDispatch()
    const token = useSelector((state => state.user.user.token))
    const editFormSubmit = (data) => {
        const formData = {
            name: data.name || name,
            category: data.category || category,
            description: data.description || description
        }
        dispatch(updateTeamInfo(formData, _id, token, handleModal))
    }

    return (
        <Modal className="p-0"
            size="xl"
            show={showModal}
            position="center">

            <div className='bg-secondary border-secondary border px-5 py-5 text-white rounded-t-lg flex justify-between items-center'>
                <h1 className='text-xl font-semibold'>
                    Edit Team Information
                </h1>
                <span>
                    <AiOutlineInfoCircle size={28} />
                </span>
            </div>

            <form onSubmit={handleSubmit(editFormSubmit)} className='p-4 border-secondary border rounded-b-lg'>
                <div className="form-control w-full mt-2">
                    <label>Team Name</label>
                    <input
                        type="text"
                        {...register("name", {
                            required: "Team name is required", pattern: {
                                value: /^[^\s]+(?:$|.*[^\s]+$)/,
                                message: "Entered value cant start/end or contain only white spacing"
                            },
                        })}
                        defaultValue={name}
                        placeholder='Agile-3'
                        className="px-3 py-2 border-secondary border outline-none rounded-lg w-full text-black mt-1" />

                    {errors.name && <p className='text-red-500 text-xs'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full mt-2">
                    <label htmlFor='category'> Team Category </label>
                    <input
                        id='category'
                        type="text"
                        {...register("category", {
                            required: "Team Title is required", pattern: {
                                value: /^[^\s]+(?:$|.*[^\s]+$)/,
                                message: "Entered value cant start/end or contain only white spacing"
                            },
                        })}
                        defaultValue={category}
                        placeholder='Video editing'
                        className="px-3 py-2 border-secondary border outline-none rounded-lg w-full text-black mt-1" />

                    {errors.category && <p className='text-red-500 text-xs'>{errors.category?.message}</p>}
                </div>
                <div className="form-control w-full mt-2">
                    <label htmlFor='description'>Team Goal</label>
                    <input id='description'
                        type="text"
                        {...register("description",
                            {
                                required: "Team goal is required", pattern: {
                                    value: /^[^\s]+(?:$|.*[^\s]+$)/,
                                    message: "Entered value cant start/end or contain only white spacing"
                                },
                            })}
                        defaultValue={description}
                        placeholder='Deadline for MosKot is 5 day'
                        className="px-3 py-2 border-secondary border outline-none rounded-lg w-full text-black mt-1" />

                    {errors.description && <p className='text-red-500 text-xs'>{errors.description?.message}</p>}
                </div>

                <div className='flex gap-x-2 justify-end items-center mt-5'>

                    <button className='inline-block rounded-full px-6 py-2 text-sm border border-secondary text-secondary '
                        type="button"
                        onClick={handleModal}>
                        Cancel
                    </button>


                    <button
                        className='inline-block rounded-full px-6 py-2  bg-secondary text-sm text-white '
                        type='submit'
                    >
                        Submit
                    </button>


                </div>
            </form>
        </Modal>
    );
};

export default EditTeamModal;