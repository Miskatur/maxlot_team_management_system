/* eslint-disable react/prop-types */
import { Modal } from 'keep-react';
import { useForm } from 'react-hook-form';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import useToken from '../../hooks/useToken';
import addUser from '../../redux/thunkFunctionalities/addUser';

const AddMember = ({ showModal, handleModal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch()
    const token = useToken()
    const addUserDataSubmit = (data) => {
        const formData = {
            username: data.username,
            password: data.password,
            role: 'teamMember'
        }
        dispatch(addUser(formData, token, handleModal))

    }
    return (
        <Modal className="p-0"
            size="xl"
            show={showModal}
            position="center">

            <div className='bg-secondary border-secondary border px-5 py-5 text-white rounded-t-lg flex justify-between items-center'>
                <h1 className='text-xl font-semibold'>
                    Add a Member
                </h1>
                <span>
                    <AiOutlineInfoCircle size={28} />
                </span>
            </div>

            <form onSubmit={handleSubmit(addUserDataSubmit)} className='p-4 border-secondary border rounded-b-lg'>
                <div className="form-control w-full mt-2">
                    <label>Username</label>
                    <input
                        type="text"
                        {...register("username", {
                            required: "Username is required", pattern: {
                                value: /^[^\s]+(?:$|.*[^\s]+$)/,
                                message: "Entered value cant start/end or contain only white spacing"
                            },
                        })}
                        placeholder='Input your username'
                        className="px-3 py-2 border-secondary border outline-none rounded-lg w-full text-black mt-1" />

                    {errors.username && <p className='text-red-500 text-xs'>{errors.username?.message}</p>}
                </div>
                <div className="form-control w-full mt-2">
                    <label htmlFor='password'> Password </label>
                    <input
                        id='password'
                        type="text"
                        {...register("password", {
                            required: "Password is required", pattern: {
                                value: /^[^\s]+(?:$|.*[^\s]+$)/,
                                message: "Entered value cant start/end or contain only white spacing"
                            },
                        })}
                        placeholder='Input your password'
                        className="px-3 py-2 border-secondary border outline-none rounded-lg w-full text-black mt-1" />

                    {errors.password && <p className='text-red-500 text-xs'>{errors.password?.message}</p>}
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

export default AddMember;