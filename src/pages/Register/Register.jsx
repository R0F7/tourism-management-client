import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Register = () => {
    return (
            <div className="lg:w-[27%] px-6 pt-10 pb-14 mx-auto lg:mt-36 g-gray-50 bg-[rgba(243,244,246,.35)] shadow">
                <h4 className="text-2xl font-semibold text-gray-500 mb-8 uppercase">Register</h4>
                <form className="space-y-5">
                    <div className="flex items-center gap-2 border-b pb-2 ">
                        <FaRegUser className="text-gray-500" />
                        <input type="text" name="name" id="name" placeholder="Username" className="outline-none w-full bg-transparent" />
                    </div>
                    <div className="flex items-center gap-2 border-b pb-2 ">
                        <MdOutlineEmail className="text-gray-500" />
                        <input type="email" name="email" id="email" placeholder="Email" className="outline-none w-full bg-transparent" />
                    </div>
                    <div className="flex items-center gap-2 border-b pb-2 ">
                        <MdOutlinePhotoLibrary className="text-gray-500" />
                        <input type="text" name="photoURL" id="photoURL" placeholder="PhotoURL" className="outline-none w-full bg-transparent" />
                    </div>
                    <div className="flex items-center gap-2 border-b pb-2 ">
                        <RiLockPasswordLine className="text-gray-500" />
                        <input type="password" name="password" id="password" placeholder="Password" className="outline-none w-full bg-transparent" />
                    </div>
                    <div className="text-center">
                        <button className="uppercase text-sm bg-[#A88E64] text-white py-2.5 px-12 font-bold mt-5">Register</button>
                    </div>
                </form>
            </div>
    );
};

export default Register;