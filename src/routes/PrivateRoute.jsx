/* eslint-disable react/prop-types */
import { Spinner } from 'keep-react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const data = useSelector((state) => state.user)
    const { user, loading } = data;
    if (loading) {
        return <div>
            <Spinner color="info" size="lg" />
        </div>;
    }
    if (!user.username) {
        // If not authenticated, redirect to the login page
        return <Navigate to="/login" />;
    }

    if (user.username && !loading) {
        return children;
    }
    
};

export default PrivateRoute;