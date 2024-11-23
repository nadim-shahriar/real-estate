import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="w-full min-h-screen items-center justify-center flex flex-col gap-10">
            <h1 className="text-5xl">Oppps....</h1>
            <button className="btn hover:bg-cyan-950 hover:text-white font-bold"><Link to={'/'}>Go home</Link></button>
        </div>
    );
};

export default ErrorPage;