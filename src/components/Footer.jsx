import { FaHandPointRight } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TbBrandInstagram } from "react-icons/tb";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
    return (
        <div className="bg-base-300">
            <div className="container mx-auto ">
                <footer className="grid grid-cols-7 gap-0 pt-12 pb-14  text-base-content">
                    <nav className=" flex flex-col">
                        <a className="text-xl lg:text-2xl font-bold">Travel<span className='text-[#A88E64]'>Wise</span></a>
                        <a className="link link-hover w-[75%] mb-2">1309 Coffeen Avenue STE 1200 SHERIDAN WY 82801</a>
                        {/* <a className="link link-hover">STE 1200 SHERIDAN WY 82801</a> */}
                        {/* <a className="link link-hover">WY 82801</a> */}
                        <a className="link link-hover ">+1 (253) 225 5550</a>
                        <a>tourassist@TravelWise.com</a>
                    </nav>
                    <nav className=" flex flex-col ">
                        <h6 className="footer-title">France</h6>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>  Eiffel Tower</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>  Louvre Museum</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>  Notre-Dame Cathedral</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>  Palace of Versailles</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span> Mont Saint-Michel</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>  Château de Chambord</a>
                    </nav>
                    <nav className=" flex flex-col ">
                        <h6 className="footer-title">Italy</h6>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Colosseum</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Venice Canals</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Leaning Tower of Pisa</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Florence Cathedral</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Amalfi Coast</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Vatican City</a>
                    </nav>

                    <nav className=" flex flex-col ">
                        <h6 className="footer-title">Spain</h6>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Sagrada Familia</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Park Güell</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Alhambra</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Ibiza</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Canary Islands</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Plaza Mayor, Madrid</a>
                    </nav>

                    <nav className=" flex flex-col ">
                        <h6 className="footer-title">England</h6>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Big Ben</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Buckingham Palace</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Stonehenge</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Tower of London</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Lake District</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Windsor Castle</a>
                    </nav>

                    <nav className=" flex flex-col">
                        <h6 className="footer-title">Netherlands</h6>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Keukenhof Gardens</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Anne Frank House</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Rijksmuseum</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Van Gogh Museum</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Amsterdam Canals</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Zaanse Schans</a>
                    </nav>
                    <nav className=" flex flex-col">
                        <h6 className="footer-title">Switzerland</h6>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Matterhorn</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Jungfraujoch</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Lake Geneva</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Lucerne</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Interlaken</a>
                        <a className="link link-hover flex items-center gap-1.5 text-[#7F8C8D]"><span><FaHandPointRight /></span>Swiss National Park</a>
                    </nav>
                </footer>
            </div>
            <div className="bg-gray-300 py-4">
                <div className="flex items-center container mx-auto justify-between">
                    <div className="">Copyright &copy; 2024 R0F7. Design & Developed by R0F7.</div>
                    <div className="flex text-2xl gap-2 text-[#7F8C8D]">
                        <span><RiFacebookCircleLine /></span>
                        <span><TiSocialTwitterCircular /></span>
                        <span><TbBrandInstagram /></span>
                        <span><TiSocialLinkedinCircular /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;