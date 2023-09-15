import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";


const ForgetPassword = () => {
    const navigate = useNavigate()
    const handleResetPassword = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                alert("check your email")
                navigate('/login')
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }
    return (
        <div className="min-h-screen  bg-purple-300 bg-opacity-10  flex flex-col justify-center items-center">

            <form onSubmit={handleResetPassword} className=" w-1/4 py-16 px-5 shadow-xl rounded-2xl gap-y-2  border bg-white   flex flex-col justify-center items-center" action="">
                <h1 className="text-4xl  mb-5">Reset Password</h1>


                {/* input field */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">email</span>

                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered w-full " />

                </div>
                {/* input field */}

                <div className="w-full my-5 ">
                    <button type="submit" className="btn w-full hover:bg-neutral text-white bg-purple-500"> reset</button>
                </div>

            </form>
        </div>
    );
};

export default ForgetPassword;