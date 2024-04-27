import { useLoaderData } from "react-router-dom";
import TourismSpotCard from "../../components/TourismSpotCard";

const AllTouristsSpot = () => {
    const info = useLoaderData();
    // console.log(info);

    return (
        <div className="bg-[#EDF2F6]">
            <div className="grid grid-cols-3 gap-8 p-8 my-10">
                {
                    info.map(data => <TourismSpotCard key={data._id} data={data}></TourismSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;