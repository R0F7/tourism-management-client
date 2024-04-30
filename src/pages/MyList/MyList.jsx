import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';
import { Slide } from "react-awesome-reveal";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [myData, setMyData] = useState([]);
    const email = user.email;

    useEffect(() => {
        fetch(`https://tourism-management-server-kohl.vercel.app/tourists-spot/email/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyData(data)
            })
    }, [])

    // console.log(myData);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`https://tourism-management-server-kohl.vercel.app/tourists-spot/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Coffee has been deleted.",
                                    icon: "success"
                                });
                                const remaining = myData.filter(data => data._id !== id);
                                setMyData(remaining)
                            }

                        })
                }
            })


    }

    if (myData.length === 0) {
        return <>
            <section className="flex items-center h-full sm:p-16 text-gray-900 ">
                <Helmet>
                    <title>TravelWise | Show Country Data </title>
                </Helmet>
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 text-gray-600">
                        <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                        <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
                        <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
                        <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
                    </svg>
                    <p className="text-3xl text-[#7F8C8D]" data-sider-select-id="41634cc3-56ba-49a1-870c-55ad4f2b70b5">No data has been created for any tourists spot</p>
                    <Link to='/' rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded bg-[#A88E64] text-white">Back to homepage</Link>
                </div>
            </section>
        </>
    }

    return (
        <div className="min-h-[calc(100vh-488px)]">
            <Helmet>
                <title>TravelWise | MyList </title>
            </Helmet>
            <div className="container p-2 mx-auto sm:p-4">
                <Slide direction="right">
                    <h2 className="text-xl md:text-2xl font-bold text-[#A88E64] border-l-4 border-l-[#A88E64] pl-2 font-playfair">My Tourist Spots</h2>
                </Slide>
                <div className="overflow-x-auto my-4 md:my-6 lg:my-10">
                    <table className="min-w-full text-xs md:text-sm">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="md:w-28" />
                        </colgroup>
                        <thead className="bg-[#A88E64] text-white">
                            <tr className="text-left">
                                <th className="p-3 ">#</th>
                                <th className="p-3">Spot Name</th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Average Cost</th>
                                <th className="p-3 text-right"></th>
                                <th className="p-3"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myData.map((data, idx) => <tr key={idx} className="border-b border-opacity-20 border-gray-900 bg-gray-100">
                                    <td className="p-3 text-black ">
                                        <p>{idx + 1}</p>
                                    </td>
                                    <td className="p-3 text-black">
                                        <p>{data.tourists_spot_name}</p>
                                    </td>
                                    <td className="p-3 text-black">
                                        <p>{data.location}</p>
                                        <p className="text-gray-400">{data.country_Name}</p>
                                    </td>
                                    <td className="p-3 text-black">
                                        <p>{data.average_cost}</p>
                                    </td>
                                    <td className="p-3 md:text-right">
                                        <span className="px-3 py-1 font-semibold rounded border border-[#A88E64] text-[#A88E64] hover:bg-[#A88E64] hover:text-white hover:border-0 hover:transition-colors hover:duration-500">
                                            <Link to={`/update/${data._id}`}>update</Link>
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <span className="px-3 py-1 font-semibold rounded-md bg-red-600 text-white hover:bg-transparent hover:text-red-500 hover:border hover:font-bold border-red-600 hover:transition-colors hover:duration-500">
                                            <span onClick={() => handleDelete(data._id)}>delete</span>
                                        </span>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;