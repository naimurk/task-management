import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {

    const location = useLocation()
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const [error, setError] = useState("")
    const [loading, setLoading]=useState(false)

    const handleLogin = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);
                setLoading(false)
                navigate(from, { replace: true })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorMessage);
                setError(errorMessage)
            });
    }

    return (
        <div className="min-h-screen w-full bg-purple-300 bg-opacity-10  flex flex-col justify-center items-center">
            {
                loading ? <span className="loading loading-bars loading-lg"></span> : <div className="min-h-screen  w-full flex flex-col justify-center items-center">

                {
                    error ? <p className="text-lg">{error}</p> : <form onSubmit={handleLogin} className=" w-full lg:w-1/4 py-16 px-5 shadow-xl rounded-2xl gap-y-2  border bg-white   flex flex-col justify-center items-center" action="">
                        <h1 className="text-4xl  mb-5">Login Now</h1>


                        {/* input field */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">email</span>

                            </label>
                            <input type="email" required name="email" placeholder="Type here" className="input input-bordered w-full " />

                        </div>
                        {/* input field */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">password</span>

                            </label>
                            <input type="password" required name="password" placeholder="Type here" className="input input-bordered w-full" />

                        </div>
                        <div className="w-full my-5 ">
                            <button className="btn w-full hover:bg-neutral text-white bg-purple-500"> login</button>
                        </div>
                        <Link to={'/signUP'} ><p>create an account</p></Link>
                        <Link to={'/resetPassword'} ><p className="text-blue-500">Forget Password?</p></Link>
                    </form>
                }
            </div>
            }
        </div>
    );
};

export default Login;