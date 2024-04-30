import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoaderSpin from '../../public/Animation - 1714402854132.json'
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";

const ProtectedRoute = ({children}) => {
    const { user, loading } =useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <div className="h-[60vh] flex justify-center items-center">
            <Lottie animationData={LoaderSpin} loop={true} />
            {/* <Lottie></Lottie> */}
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