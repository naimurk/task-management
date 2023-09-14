import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../firebase/firebase.config";
import { ref, set } from "firebase/database";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FetchContext } from "../../DataFetchState/DataFetchState";


const SignUp = () => {
    const location = useLocation()
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/login";
    const [fetchData , setFetchData]=useContext(FetchContext)

    const handleSignUP = (e) => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);

                set(ref(database, 'users/' + user?.uid), {
                    email: email,
                    id: user?.uid,
                    name: name,
                  });
                  setFetchData(!fetchData)

                  form.reset()
                  navigate(from, { replace: true })
                // ...
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorMessage);
                // ..
            });
           


    }




    return (
        <div className="min-h-screen  bg-purple-300 bg-opacity-10  flex flex-col justify-center items-center">

            <form onSubmit={handleSignUP} className=" w-1/4 py-16 px-5 shadow-xl rounded-2xl gap-y-3 border bg-white   flex flex-col justify-center items-center" action="">
                <h1 className="text-4xl  mb-5">Register Now</h1>
                {/* input field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full " />

                </div>

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

export default SignUp;