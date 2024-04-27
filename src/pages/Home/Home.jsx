import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider";
import TourismSpotCard from "../../components/TourismSpotCard";

const Home = () => {
    const info = useLoaderData();

    return (
        <div>
            <Slider></Slider>
            <div className="my-10">
                <div className="mt-14 mb-10">
                    <h4 className="text-4xl font-bold text-center">Top Tourist Spots Await You on TravelWise</h4>
                    <p className="w-3/4 text-center mx-auto mt-3">Embark on an unforgettable journey through Europe's cultural gems! Explore enchanting landmarks, vibrant cities, and breathtaking landscapes across France, Italy, Spain, England, Netherlands, and Switzerland with TravelWise's curated tourist spots section</p>
                </div>
                <div className="bg-[#EDF2F6] ">
                    <div className="grid grid-cols-3 gap-8 p-8">
                        {
                            info.slice(0, 6).map(data => <TourismSpotCard key={data._id} data={data}></TourismSpotCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;