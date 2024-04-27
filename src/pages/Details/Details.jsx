import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const info = useLoaderData();
    const { imageURL, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, userName, userEmail, userImage } = info;

    return (
        <div className="">
            <div className="flex border-t w-4/5 mx-auto h-[600px] rounded-xl shadow bg-gray-50">
                <div className="w-1/2 h-[530px] -translate-x-[45px] translate-y-[33px] ">
                    <img className="w-[95%] shadow-2xl h-full rounded-xl" src={imageURL} alt="" />
                </div>
                <div className="w-1/2 flex items-center">
                    <div>
                        <h4 className="text-3xl font-bold text-[#A88E64]">{tourists_spot_name}</h4>
                        <div className="flex items-center gap-2">
                            <h6 className="text-[20px] text-[#52525E]">{location}</h6>
                            <h6 className="text-[25px] font-medium text-[#52525E] opacity-85">{country_Name}</h6>
                        </div>
                        <p className=" text-[#52525E] ">{short_description}</p>
                        <h4></h4>
                        <div className="flex items-end my-2">
                            <h4 className="text-4xl text-[#A88E64] font-semibold">{average_cost}</h4>
                            <span className="text-xl text-[#52525c]">/ {travel_time}</span>
                        </div>
                        <div className="mb-4">
                            <h6 className="text-[#52525E] text-lg font-medium">Seasonality: <span className="font-normal">{seasonality}</span></h6>
                            <h6 className="text-[#52525E] text-lg font-medium">Total Visitors Per Year: <span className="font-normal">{totalVisitorsPerYear}</span></h6>
                        </div>

                        <div className=' border-l-[8px] border-l-[#A88E64] border-opacity-70 pt-3 pb-6 px-4 bg-[#F8F9FB] relative border shadow'>
                            <h4 className='uppercase text-[#A88E64] text-sm font-semibold mb-2 rotate-90 absolute top-8 -left-8'>connector</h4>
                            <div className='flex items-center gap-2 ml-2'>
                                <div className='w-12 h-12'>
                                    <img className='w-full h-full rounded-full' src={userImage} alt="" />
                                </div>
                                <div className=''>
                                    <h6 className='text-[#52525E] font-semibold'>{userName}</h6>
                                    <h6 className='text-[#898F9B]'>{userEmail}</h6>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link to='/' className="bg-[#A88E64] text-white py-2.5 px-10 font-bold mt-10">Home</Link>
                            <button className="bg-[#A88E64] text-white py-2.5 px-10 font-bold mt-10 ml-6">Discover</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;