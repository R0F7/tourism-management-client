import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
    // console.log(country);
    const { image, country_name, description } = country;

    return (
        <Link to={`/country/${country_name}`} className='border p-6 border-[#A88E64] shadow hover:shadow-xl hover:border-white hover:rounded-lg transition-all hover:duration-200 hover:scale-[1.01] ease-in'>
            <div className='h-[220px]'>
                <img className='h-full w-full' src={image} alt="" />
            </div>
            <div>
                <h4 className='text-2xl text-[#A88E64] font-bold mt-2 mb-2.5 border-b-2 border-[#A88E64] pb-1 pr-4 inline-block'>{country_name}</h4>
                <p className='text-[#7F8C8D]'>{description}</p>
            </div>

        </Link>
    );
};

CountryCard.propTypes = {
    country: PropTypes.object,
}

export default CountryCard;