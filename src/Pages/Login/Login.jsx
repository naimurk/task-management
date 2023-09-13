import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const location = useLocation()
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate(from, { replace: true })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div className="min-h-screen  bg-purple-300 bg-opacity-10  flex flex-col justify-center items-center">

            <form onSubmit={handleLogin} className=" w-1/4 py-16 px-5 shadow-xl rounded-2xl gap-y-2  border bg-white   flex flex-col justify-center items-center" action="">
                <h1 className="text-4xl  mb-5">Login Now</h1>


                {/* input field */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">email</span>

                    </label>
                    <input type="email" name="email" placeholder="Type here" className="input input-bordered w-full " />

                </div>
                {/* input field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">password</span>

                    </label>
                    <input type="password" name="password" placeholder="Type here" className="input input-bordered w-full" />

                </div>
                <div className="w-full mt-5 ">
                    <button className="btn w-full text-white bg-purple-500"> Register</button>
                </div>
            </form>
        </div>
    );
};

export default Login;