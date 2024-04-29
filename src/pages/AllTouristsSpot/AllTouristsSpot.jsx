import { useLoaderData } from "react-router-dom";
import TourismSpotCard from "../../components/TourismSpotCard";
import { useState } from "react";
import toast from "react-hot-toast";

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
                {/* <button  className="bg-[#A88E64] text-white py-1.5 px-8 text-lg font-bold">sort</button> */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#A88E64] text-white px-8 text-lg font-bold">sort</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={handleSortAscending}>ascending order</a></li>
                        <li><a onClick={handleSortDescending}>descending order</a></li>
                    </ul>
                </div>
            </div>

            <div className="bg-[#EDF2F6]">
                <div className="grid grid-cols-3 gap-8 p-8 my-10">
                    {
                        data.map(data => <TourismSpotCard key={data._id} data={data}></TourismSpotCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTouristsSpot;

