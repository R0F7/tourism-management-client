import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider";
import TourismSpotCard from "../../components/TourismSpotCard";
import { useEffect, useState } from "react";
import CountryCard from "../../components/CountryCard";

const Home = () => {
    const info = useLoaderData();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tourists-country')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCountries(data)
            })
    }, [])
    // console.log(countries);

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
            <div className="grid grid-cols-3 my-10 gap-6">
                {
                    countries.map((country) => <CountryCard key={country._id} country={country}></CountryCard>)
                }
            </div>
            <div>
                <h2 className="text-2xl font-bold text-[#A88E64] border-l-4 border-l-[#A88E64] pl-2 ">Travel Tips & Guides</h2>
                <p className="w-[70%] mt-1 mb-3">Discover insider tips and expert advice to make the most out of your travel experience. From packing essentials to cultural etiquette, our comprehensive guides will ensure you're well-prepared for your next adventure.</p>
                <ul className="list-disc space-y-2">
                    <li className="text-[#7F8C8D] w-[80%]"><span className="text-[#7F8C8D] font-bold">Pack Light:</span> Traveling with less luggage not only makes it easier to move around but also saves you from excess baggage fees. Stick to essentials and versatile clothing items that you can mix and match.</li>
                    <li className="text-[#7F8C8D] w-[80%]"><span className="text-[#7F8C8D] font-bold">Research Local Customs:</span> Before visiting a new destination, take some time to learn about the local customs and traditions. This includes understanding appropriate attire, greeting etiquette, and cultural norms to ensure respectful interactions with locals.</li>
                    <li className="text-[#7F8C8D] w-[80%]"><span className="text-[#7F8C8D] font-bold">Stay Hydrated:</span> Traveling can be exhausting, especially in unfamiliar environments. Remember to drink plenty of water throughout your journey to stay hydrated and maintain your energy levels, especially in hot climates or during physical activities.</li>
                    <li className="text-[#7F8C8D] w-[80%]"><span className="text-[#7F8C8D] font-bold">Backup Important Documents:</span> Make digital copies of important documents such as your passport, ID, travel insurance, and itinerary. Store these documents securely in cloud storage or email them to yourself for easy access in case of emergencies or loss.</li>
                    <li className="text-[#7F8C8D] w-[80%]"><span className="text-[#7F8C8D] font-bold">Be Mindful of Scams:</span> Stay vigilant and be cautious of common travel scams targeting tourists, such as overcharging for goods or services, fake taxi drivers, or distraction techniques. Research common scams in your destination and stay alert to avoid falling victim.</li>
                    <li className="text-[#7F8C8D] w-[80%]"><span className="text-[#7F8C8D] font-bold">Learn Basic Phrases:</span> Even if you don't speak the local language fluently, learning a few basic phrases such as "hello," "thank you," and "please" can go a long way in fostering positive interactions with locals and showing respect for their culture.</li>
                    <li className="text-[#7F8C8D] w-[80%]"><span className="text-[#7F8C8D] font-bold">Travel Insurance:</span> Invest in comprehensive travel insurance to protect yourself against unexpected events such as trip cancellations, medical emergencies, or lost luggage. Read the policy carefully to understand coverage and exclusions before your trip.</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;