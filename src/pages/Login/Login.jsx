import React from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import loginUser from '../../redux/thunkFunctionalities/loginUser';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'keep-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = React.useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const user = useSelector((state) => state.user)
    const { loading } = user;
    const navigate = useNavigate()

    const handleLogin = (data) => {
        if (errors.username) {
            return toast.error('Username is required')
        }
        if (errors.password) {
            return toast.error('Password is required')
        }
        const formData = {
            username: data.username,
            password: data.password
        }

        dispatch(loginUser(formData, navigate))
    }
    return (
        <div className='xs:w-full md:w-1/2 lg:w-1/3 mx-auto  flex flex-col justify-center items-center border border-primary-600 rounded-xl mt-10 lg:mt-20'>

            <div className='bg-secondary rounded-t-xl text-white w-full text-center p-10'>
                <h1 className='text-2xl font-semibold'>
                    Welcome to MosKot
                </h1>
                <h2 className='text-lg font-medium'>
                    Sign In with your account to continue
                </h2>
            </div>
            <form
                onSubmit={handleSubmit(handleLogin)}
                className='bg-white rounded-b-xl w-full p-10'>
                <div className="">
                    <input
                        id="username"
                        type="text"
                        {...register("username", {
                            required: "Username is required",

                            pattern: {
                                value: /^[^\s]+(?:$|.*[^\s]+$)/,
                                message: "Entered value cant start/end or contain only white spacing"
                            },
                        })}
                        placeholder="username"
                        className="w-full rounded  border border-secondary text-gray-700 py-2 px-3 mt-1 outline-none"
                    />
                    <span>
                        {errors.username &&
                            <p className='text-xs text-red-500'>{errors.username.message}</p>
                        }
                    </span>
                </div>

                <div className="mt-2 relative">
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="password"
                        {...register("password", { required: true })}
                        className="w-full rounded  border border-secondary  py-2 px-3 mt-1 outline-none text-gray-700"
                    />
                    <span className='absolute right-2 top-3.5' onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />
                        }
                    </span>
                    <span>
                        {errors.password &&
                            <p className='text-xs text-red-500'>Password is required</p>
                        }
                    </span>
                </div>

                <div className="mt-6">
                    {
                        loading ?

                            <button className={` w-full rounded-[5px] font-medium py-2 text-[18px] bg-secondary text-white hover:bg-primary-700`}>

                                <Spinner color="info" size="md" />
                            </button> :
                            <button
                                type='submit'
                                className={` w-full rounded-[5px] font-medium py-2 text-[18px] bg-secondary text-white hover:bg-primary-700`}
                            >
                                Sign In
                            </button>
                    }
                </div>
            </form>
        </div>
    );
};

export default Login;