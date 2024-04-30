import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";

const AllTourismSpotCard = ({ data }) => {
    const { _id, imageURL, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, userName, userEmail, userImage } = data;
    // console.log(data);

    return (
        <div className='shadow-lg md:shadow-sm mb-6 md:mb-0 border p-4 bg-slate-50'>
            <div className='h-[225px] relative'>
                <img className='w-full h-full' src={imageURL} alt="" />
                <span className='text-2xl text-gray-300 absolute top-5 right-5'><FaRegHeart /></span>
            </div>
            <div className='bg-slate-50'>
                <div className='p-4 pb-'>
                    <div className='flex items-center text-[#52525E] font-semibold'>
                        <h4 className='text-xl font-playfair'>{tourists_spot_name}</h4>
                        <div className='w-2 h-2 mt-1 mx-1.5 rounded-full bg-[#52525E]'></div>
                        <h6 className='text-lg font-workSans'>{travel_time}</h6>
                    </div>
                    <div className='text-3xl my-1 text-[#A88E64]'>
                        <h6>${average_cost}</h6>
                    </div>
                    <div className='mt-2'>
                        <h4 className='text-lg font-semibold text-[#52525E] font-playfair'>Seasonality: <span className='font-normal font-workSans'>{seasonality}</span></h4>
                        <h4 className='text-lg font-semibold text-[#52525E] font-playfair'>Total Visitors PerYear: <span className='font-normal font-workSans'>{totalVisitorsPerYear}</span></h4>
                    </div>
                    {/* <div className='flex items-center border-y pt-1 pb-2 mt-2 mb-3 text-lg font-semibold gap-5 md:gap-[10%]'>
                        <p className='text-[#52525E] font-playfair'>Country: <span className='font-normal font-workSans'>{country_Name}</span></p>
                        <h4 className='text-[#52525E] font-playfair'>Location: <span className='font-normal font-workSans'>{location}</span></h4>
                    </div> */}
                    <div className='flex justify-end mt-4'>
                        <Link to={`/tourists-spot/${_id}`} >
                            <button className='hover:border-2 border-[#A88E64] h-10 w-28 rounded bg-[#A88E64] font-playfair font-bold text-white hover:text-[#A88E64] hover:bg-white hover:transition-colors hover:duration-500'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllTourismSpotCard.propTypes = {
    data: PropTypes.object,
}

export default AllTourismSpotCard;