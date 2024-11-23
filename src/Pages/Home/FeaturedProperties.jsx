import { NavLink, useLoaderData } from "react-router-dom";
import Property from "./Property";


const FeaturedProperties = () => {
    const properties = useLoaderData()
    console.log(properties)
    return (
        <div className="my-[100px]">
            <div className="space-y-3 text-center ">
                <p className="text-cyan-950 text-xl font-semibold">Featured Properties</p>
                <h2 className="text-4xl font-semibold text-black">Recommended for You</h2>
            </div>
            <div className="flex gap-3 my-10 justify-center">
                <button className="btn rounded-full hover:bg-cyan-950 hover:text-white"><NavLink>View All</NavLink></button>
                <button className="btn rounded-full hover:bg-cyan-950 hover:text-white"><NavLink>ApartMent</NavLink></button>
                <button className="btn rounded-full hover:bg-cyan-950 hover:text-white"><NavLink>Villa</NavLink></button>
                <button className="btn rounded-full hover:bg-cyan-950 hover:text-white"><NavLink>Studio</NavLink></button>
                <button className="btn rounded-full hover:bg-cyan-950 hover:text-white"><NavLink>House</NavLink></button>
                <button className="btn rounded-full hover:bg-cyan-950 hover:text-white"><NavLink>Office</NavLink></button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    properties.map(property =><Property
                        key={property.id}
                        property={property}
                    ></Property>)
                }
            </div>
        </div>
    );
};

export default FeaturedProperties;