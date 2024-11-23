import { Link } from "react-router-dom";
import { LiaChartAreaSolid } from "react-icons/lia";
import { IoLocation } from "react-icons/io5";



const Property = ({ property }) => {
    const { image_url, estate_title, area, location, price,status } = property
    return (
        <div className="rounded-2xl relative shadow-xl">
            <img className="rounded-t-2xl h-[300px] w-full" src={image_url} alt="" />
            <div className="p-3">
                <Link className="text-xl">{estate_title}</Link>
                <p className="flex gap-2 items-center">
                    <LiaChartAreaSolid></LiaChartAreaSolid>
                    {area}
                </p>
                <p className="absolute bottom-[235px] flex gap-2 items-center bg-base-200 px-4  rounded-full ">
                    <IoLocation></IoLocation>
                    {location}
                </p>
                <hr  className="my-5"/>
                <div className="mb-5">
                    <p className="text-2xl mb-4">For <span className="font-bold">{status}</span></p>
                    <p className="text-3xl">{price}</p>
                </div>
            </div>
        </div>
    );
};

export default Property;