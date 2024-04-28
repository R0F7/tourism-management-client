import { useLoaderData } from "react-router-dom";
import TourismSpotCard from "../../components/TourismSpotCard";
import { useState } from "react";

const AllTouristsSpot = () => {
    const info = useLoaderData();
    const [data, setData] = useState(info)

    const handleSort = () => {
        fetch('http://localhost:5000/tourists-spot/sorting-data')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }

    return (
        <div className="bg-[#EDF2F6]">
            <div>
                <button onClick={handleSort} className="btn">sort</button>
            </div>
            <div className="grid grid-cols-3 gap-8 p-8 my-10">
                {
                    data.map(data => <TourismSpotCard key={data._id} data={data}></TourismSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;