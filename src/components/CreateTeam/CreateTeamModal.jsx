/* eslint-disable react/prop-types */
import { Modal } from 'keep-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { NEXT_STEP, PREVIOUS_STEP, RESET_STEP } from '../../redux/actionTypes/teamCreateType';
import { renderStep } from './RenderStep';
import createTeam from '../../redux/thunkFunctionalities/createTeam';
import { BsBookmarkPlusFill } from "react-icons/bs";
const CreateTeamModal = ({ token }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm();

    const dispatch = useDispatch()
    const steps = useSelector((state) => state.teams.step)
    const [showModal, setShowModal] = React.useState(false);

    const handleModal = () => {
        setShowModal(!showModal);
        dispatch({ type: RESET_STEP });
        reset();
    };

    const teamFormSubmit = (data) => {
        if (data.name === '') {
            return toast.error("Team name can't be empty")
        }
        if (data.category === '') {
            return toast.error("Team category can't be empty")
        }
        if (data.description === '') {
            return toast.error("Team Goal can't be empty")
        }
        dispatch(createTeam(data, token, handleModal))

    }

    return (
        <>
            <button className='px-4 py-3 border-2 font-semibold text-secondary border-secondary rounded-full hover:text-white hover:bg-secondary'
                onClick={handleModal}  > + Create a team  </button>

            <Modal
                className="p-0"
                size="xl"
                show={showModal}
                position="center"
                onClose={''}
            >
                <div className='bg-secondary border-secondary border px-5 py-5 text-white rounded-t-lg flex justify-between items-center'>
                    <h1 className='text-xl font-semibold'>
                        {steps === 1 && 'Create a new team'}
                        {steps === 2 && 'Team Category'}
                        {steps === 3 && 'Team Description'}
                    </h1>
                    <span>
                        <BsBookmarkPlusFill size={24} />
                    </span>
                </div>
                <form onSubmit={handleSubmit(teamFormSubmit)} className='px-3 py-2 border-secondary border rounded-b-lg'>
                    {/* {renderStep()} */}
                    {renderStep(steps, register, errors, watch)}

                    <div className={`flex ${steps === 1 ? 'justify-end' : 'justify-between'} mt-4 mb-3  gap-x-2`}>
                        {steps !== 1 && (

                            <div>
                                <button className='inline-block rounded-full px-6 py-2  bg-textColor text-white text-sm' type="button" onClick={() => dispatch({ type: PREVIOUS_STEP })}>
                                    Previous
                                </button>
                            </div>
                        )}
                        <div className='flex gap-x-2 justify-self-end items-center'>

                            <button className='inline-block rounded-full px-6 py-2 text-sm border border-secondary text-secondary ' type="button" onClick={handleModal}>
                                Cancel
                            </button>
                            {
                                steps !== 3 &&
                                <button
                                    className='inline-block rounded-full px-6 py-2  bg-secondary text-sm text-white '
                                    type='button'
                                    onClick={() => dispatch({ type: NEXT_STEP })}
                                >
                                    Continue
                                </button>
                            }
                            {
                                steps === 3 &&
                                <button
                                    className='inline-block rounded-full px-6 py-2  bg-secondary text-sm text-white '
                                    type='submit'
                                >
                                    Create
                                </button>
                            }
                        </div>
                    </div>

                </form>
            </Modal >

        </>
    );
};

export default CreateTeamModal;