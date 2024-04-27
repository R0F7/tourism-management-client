import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const TourismSpotCard = ({ data }) => {
    const { _id, imageURL, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, userName, userEmail, userImage } = data;
    // console.log(data);

    return (
        <div className='shadow-sm'>
            <div className='h-[225px]'>
                <img className='w-full h-full' src={imageURL} alt="" />
            </div>
            <div className='bg-[#FFFFFF]'>
                <div className='p-4 pb-'>
                    <div className='flex items-center text-[#52525E] font-semibold text-xl'>
                        <h4 className=''>{tourists_spot_name}</h4>
                        <div className='w-2 h-2 mt-1 mx-1.5 rounded-full bg-[#52525E]'></div>
                        <h6 className=''>{travel_time}</h6>
                    </div>
                    <div className='text-3xl my-1 text-[#A88E64]'>
                        <h6>{average_cost}</h6>
                    </div>
                    <div>
                        <h4 className='text-lg font-semibold text-[#52525E]'>Seasonality: <span className='font-normal'>{seasonality}</span></h4>
                    </div>
                    <div className='flex items-center border-y pt-1 pb-2 mt-2 mb-3 text-lg font-semibold gap-[10%]'>
                        <p className='text-[#52525E]'>Country: <span className='font-normal'>{country_Name}</span></p>
                        <h4 className='text-[#52525E]'>Location: <span className='font-normal'>{location}</span></h4>
                    </div>
                    <div className='flex justify-end'>
                        <Link to={`/tourists-spot/${_id}`} >
                            <button className='border-2 border-[#A88E64] font-medium text-[#A88E64] h-10 w-28 rounded m-2 mb-3 hover:bg-[#A88E64] hover:text-white hover:border-0 hover:transition-colors hover:duration-500'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

TourismSpotCard.propTypes = {
    data: PropTypes.object,
}

export default TourismSpotCard;