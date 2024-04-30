import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaChevronDown } from "react-icons/fa";
import AllTourismSpotCard from "../../components/AllTourismSpotCard";
import { Helmet } from 'react-helmet-async';

const AllTouristsSpot = () => {
    const info = useLoaderData();
    const [data, setData] = useState(info)

    const handleSortAscending = () => {
        fetch('http://localhost:5000/tourists-spot/sorting-data/ascending')
            .then(res => res.json())
            .then(data => {
                setData(data);
                toast.success('sort by ascending order')
            })
    }

    const handleSortDescending = () => {
        fetch('http://localhost:5000/tourists-spot/sorting-data/descending')
            .then(res => res.json())
            .then(data => {
                setData(data);
                toast.success('sort by descending order')
            })
    }

    return (
        <div>
            <div className="text-center mt-4">
                <Helmet>
                    <title>TravelWise | All Tourists Spot </title>
                </Helmet>
                {/* <button  className="bg-[#A88E64] text-white py-1.5 px-8 text-lg font-bold">sort</button> */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#A88E64] text-white px-6 font-bold font-playfair uppercase ">sort by
                        <span className="ml-1">
                            <FaChevronDown />
                        </span>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-52">
                        <li><a onClick={handleSortAscending} className="border-b shadow text-[#A88E64] font-medium">ascending order</a></li>
                        <li><a onClick={handleSortDescending} className="border-b shadow text-[#A88E64] font-medium">descending order</a></li>
                    </ul>
                </div>
            </div>

            <div className="md:bg-gray-100 mx-5 md:mx-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8 md:p-4 lg:p-8 my-4 md:my-8 lg:my-10">
                    {
                        data.map(data => <AllTourismSpotCard key={data._id} data={data}></AllTourismSpotCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTouristsSpot;

