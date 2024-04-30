import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider";
import TourismSpotCard from "../../components/TourismSpotCard";
import { useEffect, useState } from "react";
import CountryCard from "../../components/CountryCard";
import { Helmet } from 'react-helmet-async';
import { Rotate, Slide, } from "react-awesome-reveal";

const Home = () => {
    const info = useLoaderData();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://tourism-management-server-kohl.vercel.app/tourists-country')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCountries(data)
            })
    }, [])
    // console.log(countries);

    return (
        <div className="mx-5 md:mx-0">
            <Helmet>
                <title>TravelWise | Home </title>
            </Helmet>
            <Slider></Slider>
            <div className="lg:my-10">
                <div className="mt-4 md:mt-8 lg:mt-14 mb-6 lg:mb-10">
                    <Slide direction="left">
                        <h4 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-[#A88E64] font-playfair">Top Tourist Spots Await You on TravelWise</h4>
                    </Slide>
                    <Slide direction="right">
                        <p className="lg:w-3/4 text-center mx-auto mt-3 text-xs md:text-base text-[#7F8C8D] font-workSans">Embark on an unforgettable journey through Europe's cultural gems! Explore enchanting landmarks, vibrant cities, and breathtaking landscapes across France, Italy, Spain, England, Netherlands, and Switzerland with TravelWise's curated tourist spots section</p>
                    </Slide>
                </div>
                <div>
                    <Slide direction="left">
                        <h4 className="text-2xl font-bold text-[#A88E64] mb-5 border-l-4 pl-2 border-[#A88E64] font-playfair">Tourists Spots</h4>
                    </Slide>
                    <div className="md:g-gray-100 ">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8 ">
                            {
                                info.slice(0, 6).map(data => <TourismSpotCard key={data._id} data={data}></TourismSpotCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <Slide direction="left">
                    <h4 className="text-2xl font-bold text-[#A88E64] mb-5 border-l-4 pl-2 border-[#A88E64] font-playfair">Countries</h4>
                </Slide>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        countries.map((country) => <CountryCard key={country._id} country={country}></CountryCard>)
                    }
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 my-10 items-center">
                <div>
                    <img className="h-[220px] md:h-[370px] lg:h-[500px] w-full" src="https://i.ibb.co/F5Wm7hd/Blog-20210609b4d500f4290d9443c25ea31f915c3a18.png" alt="" />
                </div>
                <div>
                    <Slide direction="right">
                        <h2 className="text-xl md:text-2xl font-bold text-[#A88E64] border-l-4 border-l-[#A88E64] pl-2 font-playfair">Travel Tips & Guides</h2>
                    </Slide>
                    <p className="lg:w-[70%] mt-2 mb-4 text-[#7F8C8D] font-playfair">Discover insider tips and expert advice to make the most out of your travel experience. From packing essentials to cultural etiquette, our comprehensive guides will ensure you're well-prepared for your next adventure</p>
                    <ul className="text-sm md:text-base list-disc space-y-2 ml-6">
                        <li className="text-[#7F8C8D]"><span className="text-[#7F8C8D] font-bold font-playfair">Pack Light:</span> Traveling with less luggage not only makes it easier to move around but also saves you from excess baggage fees. Stick to essentials and versatile clothing items that you can mix and match.</li>
                        <li className="text-[#7F8C8D] "><span className="text-[#7F8C8D] font-bold font-playfair">Research Local Customs:</span> Before visiting a new destination, take some time to learn about the local customs and traditions. This includes understanding appropriate attire, greeting etiquette, and cultural norms to ensure respectful interactions with locals.</li>
                        <li className="text-[#7F8C8D] "><span className="text-[#7F8C8D] font-bold font-playfair">Stay Hydrated:</span> Traveling can be exhausting, especially in unfamiliar environments. Remember to drink plenty of water throughout your journey to stay hydrated and maintain your energy levels, especially in hot climates or during physical activities.</li>
                        <li className="text-[#7F8C8D] "><span className="text-[#7F8C8D] font-bold font-playfair">Backup Important Documents:</span> Make digital copies of important documents such as your passport, ID, travel insurance, and itinerary. Store these documents securely in cloud storage or email them to yourself for easy access in case of emergencies or loss.</li>
                        <li className="text-[#7F8C8D] "><span className="text-[#7F8C8D] font-bold font-playfair">Be Mindful of Scams:</span> Stay vigilant and be cautious of common travel scams targeting tourists, such as overcharging for goods or services, fake taxi drivers, or distraction techniques. Research common scams in your destination and stay alert to avoid falling victim.</li>
                        <li className="text-[#7F8C8D] "><span className="text-[#7F8C8D] font-bold font-playfair">Learn Basic Phrases:</span> Even if you don't speak the local language fluently, learning a few basic phrases such as "hello," "thank you," and "please" can go a long way in fostering positive interactions with locals and showing respect for their culture.</li>
                        <li className="text-[#7F8C8D] "><span className="text-[#7F8C8D] font-bold font-playfair">Travel Insurance:</span> Invest in comprehensive travel insurance to protect yourself against unexpected events such as trip cancellations, medical emergencies, or lost luggage. Read the policy carefully to understand coverage and exclusions before your trip.</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-6 flex-col lg:flex-row-reverse my-8 md:my-10 items-center">
                <div className="lg:w-2/5">
                    <img className="h-[220px] md:h-[370px] lg:h-[500px] w-full" src="https://i.ibb.co/6YhdxTs/2-dubrovnik-local-countryside-private-dining-experience.jpg" alt="" />
                </div>
                <div className="lg:w-3/5">
                    <Slide direction="right">
                        <h2 className="text-xl md:text-2xl font-bold text-[#A88E64] border-l-4 border-l-[#A88E64] pl-2 font-playfair">Local Cuisine & Dining Experiences</h2>
                    </Slide>
                    <p className="md:w-[70%] mt-2 mb-4 text-[#7F8C8D]">Indulge your taste buds in the rich and diverse culinary delights of our destination. From street food stalls to fine dining establishments, immerse yourself in the vibrant flavors and culinary traditions that define our region</p>
                    <ul className="list-disc space-y-2 ml-6 text-sm md:text-base">
                        <li className="text-[#7F8C8D]"><span className="text-[#7F8C8D] font-bold font-playfair">Street Food Delights:</span>  Wander through bustling markets and vibrant streets to discover an array of tantalizing street food options. Sample local favorites such as savory kebabs, spicy noodles, flavorful curries, and mouthwatering desserts prepared right before your eyes.</li>
                        <li className="text-[#7F8C8D] "><span className="text-[#7F8C8D] font-bold font-playfair">Traditional Eateries:</span>  Step into quaint cafes, family-run eateries, and hidden gems tucked away in charming neighborhoods. Experience the warmth of local hospitality as you savor authentic dishes crafted from age-old recipes passed down through generations.Farm-to-Table Experiences: Embark on culinary adventures that take you from farm to table. Join guided tours to local farms and markets, where you can handpick fresh ingredients and learn about sustainable farming practices before enjoying farm-fresh meals prepared by talented chefs.</li>
                        <li className="text-[#7F8C8D] "><span className="text-[#7F8C8D] font-bold font-playfair"> Cooking Classes:</span> Delve deeper into the local cuisine with hands-on cooking classes led by expert chefs. Learn the secrets behind signature dishes, from the selection of ingredients to the techniques used in preparation. Afterwards, savor the fruits of your labor in a delightful feast.</li>
                        <li className="text-[#7F8C8D] "><span className="text-[#7F8C8D] font-bold font-playfair">Fine Dining Experiences:</span>  Treat yourself to unforgettable dining experiences at upscale restaurants renowned for their innovative menus and exquisite presentations. Indulge in gourmet creations that artfully blend traditional flavors with contemporary twists, accompanied by fine wines and impeccable service.</li>
                        <li className="text-[#7F8C8D] "><span className="text-[#7F8C8D] font-bold font-playfair"> Cultural Dinners:</span> Immerse yourself in the cultural heritage of the region through themed dinners and culinary events. Enjoy traditional performances, live music, and storytelling while savoring authentic dishes that reflect the rich tapestry of our cultural traditions.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Home;