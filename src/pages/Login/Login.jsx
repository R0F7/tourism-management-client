import { useContext } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const { loginUser, googlLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(() => {
                toast.success('LogIn successfully');
                navigate(location?.state ? location.state : '/' );
                
            })
            .catch(() => {
                toast.error('Invalid Email or Password')
            })
    }

    const handleGoogleLogin = () => {
        googlLogin()
            .then(() => {
                toast.success('LogIn successfully');
                navigate(location?.state ? location.state : '/' );
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    const handleGitHubLogin = () => {
        githubLogin()
            .then(() => {
                toast.success('LogIn successfully');
                navigate(location?.state ? location.state : '/' );
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }


    return (
        <div className="md:h-[calc(100vh-120px)] flex flex-col justify-center">
            <div className="mx-5 md:w-1/2 mt-10 md:mt-0 lg:w-[27%] px-6 pt-8 lg:pt-10 pb-10 lg:pb-12 md:mx-auto g-gray-50 bg-[rgba(243,244,246,.35)] shadow border">
                <h4 className="text-xl lg:text-2xl font-semibold text-gray-500 mb-6 lg:mb-8 uppercase">Login</h4>
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
                    <div className="flex items-center gap-2 border-b pb-2 ">
                        <MdOutlineEmail className="text-gray-500" />
                        <input type="email" name="email" id="email" placeholder="Email" className="outline-none w-full bg-transparent" required/>
                    </div>
                    <div className="flex items-center gap-2 border-b pb-2 ">
                        <RiLockPasswordLine className="text-gray-500" />
                        <input type="password" name="password" id="password" placeholder="Password" className="outline-none w-full bg-transparent" required/>
                    </div>
                    <div className="text-center">
                        <button className="uppercase text-sm bg-[#A88E64] text-white py-2 md:py-2.5 px-12 font-bold my-3">Login</button>
                    </div>
                </form>
                <div className="flex items-center gap-4 mt-3">
                    <div className="h-[1px] w-[100%] bg-[#A88E64]"></div> <div className="font-medium text-gray-500">Or</div> <div className="h-[1px] w-[100%] bg-[#A88E64]"></div>
                </div>
                <div className="flex gap-4 justify-center my-4">
                    <div onClick={handleGoogleLogin} className="border py-2 px-8 font-bold text-[#A88E64] border-[#A88E64]">
                        <h4>Google</h4>
                    </div>
                    <div onClick={handleGitHubLogin} className="border py-2 px-8 font-bold text-[#A88E64] border-[#A88E64]">
                        <h4>Github</h4>
                    </div>
                </div>
                <div>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className="text-gray-500">Don't have an account? <Link to='/register' className="underline text-[#A88E64] font-medium">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;