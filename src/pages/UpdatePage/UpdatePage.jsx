import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
    const data = useLoaderData(); 
    const { imageURL, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear } = data;
    // console.log(data);

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const imageURL = form.image.value;
        const tourists_spot_name = form.spotName.value;
        const country_Name = form.countryName.value;
        const location = form.location.value;
        const short_description = form.description.value
        const average_cost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitor.value;

        const info = { imageURL, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear };

        fetch('http://localhost:5000/tourists-spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: "Successful",
                        text: "Information Added Successful",
                        icon: "success"
                    });
                    form.reset()
                }

            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-x-4 gap-y-2 w-[94%] md:w-3/5 mx-auto p-8 shadow-lg rounded-xl bg-gray-50">

                <label className="block col-span-6 md:col-span-6">
                    <span className="mb-1 opacity-75 font-medium">Image URL</span>
                    <input type="text" name="image" id="image" placeholder="Image URL" className="block border-2 mt-0.5 p-2.5 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-[#A88E64] outline-[#A88E64] dark:bg-gray-100" data-sider-insert-id="86ff7d83-2412-40b8-96d3-6b893f6334eb" data-sider-select-id="0beae578-82ab-450c-9e89-e1d57e43b6c9" required />
                </label>

                <label className="block col-span-3 md:col-span-3">
                    <span className="mb-1 opacity-75 font-medium">Tourists Spot Name</span>
                    <input type="text" name="spotName" id="spot" placeholder={tourists_spot_name} className="block border-2 mt-0.5 p-2.5 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-[#A88E64] outline-[#A88E64] dark:bg-gray-50" data-sider-insert-id="86ff7d83-2412-40b8-96d3-6b893f6334eb" data-sider-select-id="0beae578-82ab-450c-9e89-e1d57e43b6c9" required />
                </label>
                <label className="block col-span-3 md:col-span-3">
                    <span className="mb-1 opacity-75 font-medium">Country Name</span>
                    <select name="countryName" id="country" defaultValue="" className="block border-2 mt-0.5 p-2.5 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-[#A88E64] outline-[#A88E64] dark:bg-gray-100" data-sider-insert-id="86ff7d83-2412-40b8-96d3-6b893f6334eb" data-sider-select-id="0beae578-82ab-450c-9e89-e1d57e43b6c9" required>
                        <option value="" disabled className="">Select Your Country</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                        <option value="Spain">Spain</option>
                        <option value="England">England</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Switzerland">Switzerland</option>
                    </select>
                </label>


                <label className="block col-span-3 md:col-span-3">
                    <span className="mb-1 opacity-75 font-medium">Location</span>
                    <input type="text" name="location" id="location" placeholder={location} className="block border-2 mt-0.5 p-2.5 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-[#A88E64] outline-[#A88E64] dark:bg-gray-100" data-sider-insert-id="86ff7d83-2412-40b8-96d3-6b893f6334eb" data-sider-select-id="0beae578-82ab-450c-9e89-e1d57e43b6c9" required />
                </label>
                <label className="block col-span-3 md:col-span-3">
                    <span className="mb-1 opacity-75 font-medium">Total Visitors PerYear</span>
                    <input type="text" name="totalVisitor" id="visitor" placeholder={totalVisitorsPerYear} className="block border-2 mt-0.5 p-2.5 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-[#A88E64] outline-[#A88E64] dark:bg-gray-50" data-sider-insert-id="86ff7d83-2412-40b8-96d3-6b893f6334eb" data-sider-select-id="0beae578-82ab-450c-9e89-e1d57e43b6c9" required />
                </label>


                <label className="block col-span-3 md:col-span-2">
                    <span className="mb-1 opacity-75 font-medium">Average Cost</span>
                    <input type="text" name="averageCost" id="cost" placeholder={average_cost} className="block border-2 mt-0.5 p-2.5 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-[#A88E64] outline-[#A88E64] dark:bg-gray-100" data-sider-insert-id="86ff7d83-2412-40b8-96d3-6b893f6334eb" data-sider-select-id="0beae578-82ab-450c-9e89-e1d57e43b6c9" required />
                </label>
                <label className="block col-span-3 md:col-span-2">
                    <span className="mb-1 opacity-75 font-medium">Seasonality</span>
                    <input type="text" name="seasonality" id="seasonality" placeholder={seasonality} className="block border-2 mt-0.5 p-2.5 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-[#A88E64] outline-[#A88E64] dark:bg-gray-100" data-sider-insert-id="86ff7d83-2412-40b8-96d3-6b893f6334eb" data-sider-select-id="0beae578-82ab-450c-9e89-e1d57e43b6c9" required />
                </label>
                <label className="block col-span-3 md:col-span-2">
                    <span className="mb-1 opacity-75 font-medium">Travel Time</span>
                    <input type="text" name="travelTime" id="travel_time" placeholder={travel_time} className="block border-2 mt-0.5 p-2.5 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-[#A88E64] outline-[#A88E64] dark:bg-gray-100" data-sider-insert-id="86ff7d83-2412-40b8-96d3-6b893f6334eb" data-sider-select-id="0beae578-82ab-450c-9e89-e1d57e43b6c9" required />
                </label>

                <label className="block col-span-3 md:col-span-6">
                    <span className="mb-1 opacity-75 font-medium">Short Description</span>
                    <input type="text" name="description" id="description" placeholder="Short Description" className="block border-2 mt-0.5 p-2.5 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-[#A88E64] outline-[#A88E64] dark:bg-gray-100" data-sider-insert-id="86ff7d83-2412-40b8-96d3-6b893f6334eb" data-sider-select-id="0beae578-82ab-450c-9e89-e1d57e43b6c9" />
                </label>

                <input type="submit" value="Update" className="col-span-6 bg-[#A88E64] text-white py-3.5 mt-3 font-black" />

            </form>
        </div>
    );
};

export default UpdatePage;