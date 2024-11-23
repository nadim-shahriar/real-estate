import Banner from "../Banner/Banner";
import NavBar from "../Shared/NavBar";
import FeaturedProperties from "./FeaturedProperties";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <div className="container mx-auto">
                <FeaturedProperties></FeaturedProperties>
               
            </div>
        </div>

    );
};

export default Home;