import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

    const { signIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        console.log(email, password)

        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="hero bg-base-200 min-h-screen">

                <div className="flex-col ">
                    <div className="lg:text-left">
                        <h1 className="text-5xl text-center mb-10 font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-[500px] shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-cyan-950">Login</button>
                            </div>
                            <p className="text-lg font-semibold">Do not have account? <Link to={'/register'} className="text-cyan-500">Register now</Link></p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;