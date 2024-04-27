import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [myData, setMyData] = useState([]);
    const email = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/tourists-spot/email/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyData(data)
            })
    }, [])

    console.log(myData,);
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4">
                <h2 className="mb-4 text-2xl font-semibold leading-tight text-[#A88E64] text-center">My List</h2>
                <div className="overflow-x-auto">
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
                                <th className="p-3">#</th>
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
                                <td className="p-3 text-black">
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
                                        <span>delete</span>
                                    </span>
                                </td>
                            </tr>)
                            }
                            {/* <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                                <td className="p-3">
                                    <p>#</p>
                                </td>
                                <td className="p-3">
                                    <p>Spot Name</p>
                                </td>
                                <td className="p-3">
                                    <p>location</p>
                                    <p className="text-gray-400">country</p>
                                </td>
                                <td className="p-3">
                                    <p>average cost</p>
                                </td>
                                <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                                        <span>update</span>
                                    </span>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                                        <span>delete</span>
                                    </span>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;