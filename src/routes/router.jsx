import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import AllMembers from "../pages/AllMembers/AllMembers";
import Community from "../pages/Community/Community";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Team from "../pages/Team/Team";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: 'all-members',
                element:
                    <PrivateRoute><AllMembers /></PrivateRoute>
            },
            {
                path: 'team/:id',
                element:
                    <PrivateRoute><Team /></PrivateRoute>,
            },
            {
                path: 'community',
                element: <PrivateRoute><Community /></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login />
            },
        ]
    }
])