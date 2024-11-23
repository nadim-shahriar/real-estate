import bannerImg from '../../assets/images/Banner.jpg'

const Banner = () => {
    return (

        <div>
            <div className="carousel carousel-center h-[800px] max-w-full space-x-4 p-4">
                <div style={{ backgroundImage: `url(${bannerImg}) ` }} className="carousel-item w-full bg-cover bg-no-repeat ">
                    <div className=' h-[700px] bg-gray-50 bg-opacity-10 text-white w-full'>
                        <div className='flex h-full items-center flex-col justify-center'>
                            <h1 className='text-7xl font-bold'>Find Your Perfect Home</h1>
                            <p className='text-lg text-center mt-7'>We are a real estate agency that will help you find the best residence you dream of,<br /> let’s discuss for your dream house?</p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${bannerImg})` }} className="carousel-item w-full bg-cover bg-no-repeat ">
                    <div className=' h-[700px] bg-gray-50 bg-opacity-10 text-white w-full'>
                        <div className='flex h-full items-center flex-col justify-center'>
                            <h1 className='text-7xl font-bold'>Find Your Perfect Home</h1>
                            <p className='text-lg text-center mt-7'>We are a real estate agency that will help you find the best residence you dream of,<br /> let’s discuss for your dream house?</p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${bannerImg})` }} className="carousel-item w-full bg-cover bg-no-repeat ">
                    <div className=' h-[700px] bg-gray-50 bg-opacity-10 text-white w-full'>
                        <div className='flex h-full items-center flex-col justify-center'>
                            <h1 className='text-7xl font-bold'>Find Your Perfect Home</h1>
                            <p className='text-lg text-center mt-7'>We are a real estate agency that will help you find the best residence you dream of,<br /> let’s discuss for your dream house?</p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${bannerImg})` }} className="carousel-item w-full bg-cover bg-no-repeat ">
                    <div className=' h-[700px] bg-gray-50 bg-opacity-10 text-white w-full'>
                        <div className='flex h-full items-center flex-col justify-center'>
                            <h1 className='text-7xl font-bold'>Find Your Perfect Home</h1>
                            <p className='text-lg text-center mt-7'>We are a real estate agency that will help you find the best residence you dream of,<br /> let’s discuss for your dream house?</p>
                        </div>
                    </div>
                </div>
                
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                        className="rounded-box" />
                </div>              
            </div>      
        </div>
    );
};

export default Banner;