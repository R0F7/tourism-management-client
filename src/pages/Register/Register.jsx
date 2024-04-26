import { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import toast from 'react-hot-toast'

const Register = () => {
    const { createUser, logOut } = useContext(AuthContext);
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoURL.value;
        const password = form.password.value;

        setEmailError('')

        createUser(email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo,
                })
                toast.success('Registration successful');
                logOut();
                navigate('/login');
                
            })
            .catch(error => {
                console.log(error);
                setEmailError(error.message.split('/')[1].replace(').', ''))
            })
    }

    return (
        <div className="md:h-[calc(100vh-120px)] flex flex-col justify-center">
            <div className="mx-5 md:w-1/2 mt-10 md:mt-0 lg:w-[27%] px-6 pt-8 lg:pt-10 pb-10 lg:pb-14 md:mx-auto g-gray-50 bg-[rgba(243,244,246,.35)] shadow border">
                <h4 className="text-xl lg:text-2xl font-semibold text-gray-500 mb-6 lg:mb-8 uppercase">Register</h4>
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
                    <div className="flex items-center gap-2 border-b pb-2 ">
                        <FaRegUser className="text-gray-500" />
                        <input type="text" name="name" id="name" placeholder="Username" className="outline-none w-full bg-transparent" required/>
                    </div>
                    <div >
                        <div className="flex items-center gap-2 border-b pb-2 ">
                            <MdOutlineEmail className="text-gray-500" />
                            <input type="email" name="email" id="email" placeholder="Email" className="outline-none w-full bg-transparent" required/>
                        </div>
                        <p className="text-red-400">{emailError}</p>
                    </div>
                    <div className="flex items-center gap-2 border-b pb-2 ">
                        <MdOutlinePhotoLibrary className="text-gray-500" />
                        <input type="text" name="photoURL" id="photoURL" placeholder="PhotoURL" className="outline-none w-full bg-transparent" required/>
                    </div>
                    <div className="flex items-center gap-2 border-b pb-2 ">
                        <RiLockPasswordLine className="text-gray-500" />
                        <input type="password" name="password" id="password" placeholder="Password" className="outline-none w-full bg-transparent" required/>
                    </div>
                    <div className="text-center">
                        <button className="uppercase text-sm bg-[#A88E64] text-white py-2 md:py-2.5 px-12 font-bold mt-4">Register</button>
                    </div>
                    <div>
                        <p className="text-gray-500">Already have an account? <Link to='/login' className="underline text-[#A88E64] font-medium">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;