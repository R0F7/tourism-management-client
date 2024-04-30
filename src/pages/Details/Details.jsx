import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Details = () => {
    const info = useLoaderData();
    const { imageURL, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, userName, userEmail, userImage } = info;

    return (
        <div className="lg:my-20 mb-14">
            <Helmet>
                <title>TravelWise | Spot Details </title>
            </Helmet>
            <div className="flex flex-col md:flex-row border-t w-[94%] p-4 md:p-0 md:w-4/5 mx-auto lg:h-[600px] rounded-xl shadow bg-gray-50">
                <div className="md:w-2/5 lg:w-1/2 h-[350px] lg:h-[530px] md:-translate-x-[45px] md:translate-y-[33px] ">
                    <img className="md:w-[95%] md:shadow-2xl h-full rounded-xl" src={imageURL} alt="" />
                </div>
                <div className="w-1/2 flex items-center mt-2.5 md:mt-0">
                    <div>
                        <h4 className="text-3xl font-bold text-[#A88E64] font-playfair md:pt-3 lg:pt-0">{tourists_spot_name}</h4>
                        <div className="flex items-center gap-2">
                            <h6 className="text-xl text-[#52525E]">{location}</h6>
                            <h6 className="text-[25px] font-medium text-[#52525E] opacity-85 font-playfair">{country_Name}</h6>
                        </div>
                        <p className=" text-[#95A5A6] font-workSans">{short_description}</p>
                        <h4></h4>
                        <div className="flex items-end my-2">
                            <h4 className="text-4xl text-[#A88E64] font-semibold">${average_cost}</h4>
                            <span className="text-xl text-[#7F8C8D] font-workSans">/ {travel_time}</span>
                        </div>
                        <div className="mb-4">
                            <h6 className="text-[rgb(82,82,94,.75)] text-lg font-semibold font-playfair">Seasonality: <span className="font-normal font-workSans text-[rgb(127,140,141,.8)]">{seasonality}</span></h6>
                            <h6 className="text-[rgb(82,82,94,.75)] text-lg font-semibold font-playfair">Total Visitors Per Year: <span className="font-normal font-workSans text-[rgb(127,140,141,.8)]">{totalVisitorsPerYear}</span></h6>
                        </div>

                        <div className=' border-l-[8px] border-l-[#A88E64] border-opacity-70 pt-3 pb-6 px-4 bg-[#F8F9FB] relative border shadow'>
                            <h4 className='uppercase text-[#A88E64] text-sm font-semibold mb-2 rotate-90 absolute top-8 -left-8'>connector</h4>
                            <div className='flex items-center gap-2 ml-2'>
                                <div className='w-12 h-12'>
                                    <img className='w-full h-full rounded-full' src={userImage} alt="" />
                                </div>
                                <div className=''>
                                    <h6 className='text-[#52525E] font-semibold'>{userName}</h6>
                                    <h6 className='text-[#898F9B] font-workSans'>{userEmail}</h6>
                                </div>
                            </div>
                        </div>

                        <div className="lg:text-center pt-5 pb-3 md:py-5 lg:mt-10">
                            <Link to='/' className="bg-[#A88E64] text-white py-2 lg:py-2.5 px-4 lg:px-10 font-bold ">Home</Link>
                            <button className="bg-[#A88E64] text-white py-2 lg:py-2.5 px-4 lg:px-10 font-bold  ml-6">Discover</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;