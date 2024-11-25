import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {


    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        console.log(e)

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        // Create User
        createUser(email, password)
            .then(result => {
                console.log("User created:", result.user);
            })
            .catch(error => {
                console.error("Error creating user:", error.message);
            });

    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="hero bg-base-200 min-h-screen">

                <div className="flex-col ">
                    <div className="lg:text-left">
                        <h1 className="text-5xl text-center mb-10 font-bold">Register To Account !</h1>
                    </div>
                    <div className="card bg-base-100 w-[500px] shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-cyan-950">Register</button>
                            </div>
                            <p className="text-lg font-semibold">Already have account? <Link to={'/login'} className="text-cyan-500">Sign In now</Link></p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;