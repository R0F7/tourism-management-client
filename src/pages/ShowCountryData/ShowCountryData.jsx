import { useLoaderData } from "react-router-dom";
import TourismSpotCard from "../../components/TourismSpotCard";

const ShowCountryData = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="grid grid-cols-3 gap-6 bg-gray-100">
            {
                data.map( data => <TourismSpotCard key={data._id} data={data}></TourismSpotCard>)
            }
        </div>
    );
};

export default ShowCountryData;