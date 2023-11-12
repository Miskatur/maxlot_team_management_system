/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineBell, AiOutlineLogout } from "react-icons/ai";
import { Popover, Tooltip } from "keep-react";
import { useDispatch, useSelector } from "react-redux";
import { removeUserData } from "../../redux/actionCreators/actionCreators";
const Navbar = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const activeClass = 'bg-secondary border border-secondary text-white px-4 py-1.5 rounded-full'
    const normalClass = 'bg-white text-[#283163] px-4 py-1.5 rounded-full border-secondary border'
    const user = useSelector((state) => state.user.user)
    const { username, role } = user;
    const handleLogout = () => {
        localStorage.removeItem('user')
        dispatch(removeUserData())
        navigate('/login')
    }


    return (
        <nav className='h-14 bg-[#FFF9F9] w-full mx-auto px-16'>
            <ul className='h-full  mx-auto flex justify-between items-center gap-3  text-[#283163] cursor-pointer flex-wrap'>
                <h1 className="text-xl font-semibold">MosKot</h1>
                {
                    username ?
                        <div className="flex gap-x-2 items-center font-medium flex-wrap">
                            <Link to='/'>
                                <li className={`${pathname === '/' ? activeClass : normalClass}`}>
                                    Teams
                                </li>
                            </Link>
                            {
                                role === 'admin' &&
                                <Link to='/all-members'>
                                    <li className={`${pathname === '/all-members' ? activeClass : normalClass}`}>
                                        All Members
                                    </li>
                                </Link>
                            }

                            <Link to='/community'>
                                <li className={`${pathname === '/community' ? activeClass : normalClass}`}>
                                    Community
                                </li>
                            </Link>

                            <li className="rounded-full p-1 border border-[#283163] relative">

                                <Popover
                                    icon={false}
                                    position='bottom-end'
                                    customClass="!w-[20rem] border border-gray-200 p-1"
                                    additinalContent={
                                        <div>
                                            <h2 className="text-sm font-medium text-slate-500 ">
                                                Single line message Single line message Single line message
                                            </h2>
                                            <h2 className="text-sm font-medium text-slate-500 ">
                                                Single line message
                                            </h2>
                                            <h2 className="text-sm font-medium text-slate-500 ">
                                                Single line message
                                            </h2>
                                        </div>
                                    }
                                >
                                    <AiOutlineBell size={20} />
                                    <p className="text-[10px] absolute -right-1 -top-1 bg-secondary px-1 py-0.5 rounded-full text-white">22</p>
                                </Popover>

                            </li>
                            <Tooltip
                                content="Logout"
                                trigger="hover"
                                placement="bottom-end"
                                animation="duration-300"
                                style="light"
                            >
                                <li className="rounded-full p-1 border border-red-500 bg-red-500 " onClick={handleLogout}>
                                    <AiOutlineLogout size={20} className="text-white" />
                                </li>
                            </Tooltip>
                        </div>
                        :
                        <Link to='/all-members'>
                            <li className={`${pathname === '/login' ? activeClass : normalClass}`}>
                                Login

                            </li>
                        </Link>
                }
            </ul>
        </nav>
    );
};

export default Navbar;