import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoaderSpin from '../../public/image/Animation - 1712723170362.gif'
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const { user, loading } =useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <div>
            <img src={LoaderSpin} className='h-[75vh] flex justify-center items-center' alt="" />
        </div>
    }

    if (user) {
        return children
    }

    return (
        <div>
            <Navigate to='/login' state={location.pathname}></Navigate>
        </div>
    );
};

ProtectedRoute.propTypes = {
    children: PropTypes.node,
}

export default ProtectedRoute;