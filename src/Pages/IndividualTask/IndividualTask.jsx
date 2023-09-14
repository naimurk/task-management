import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../firebase/firebase.config";


const IndividualTask = () => {
    const {id}= useParams();
    const [loding,setLoading]=useState(false)
    const [AllUsersData, setAllUsersData] = useState([])
    const [individualTask , setIndividualTask]=useState(null)

    useEffect(() => {
        const dbRef = ref(database, "users"); // Create a reference to the "users" node
        get(dbRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    console.log(data);
                    setAllUsersData(Object.values(data));
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    useEffect(() => {
        const dbRef = ref(database, `tasks/${id}`); // Create a reference to the "users" node
        get(dbRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    // console.log(data);
                    setIndividualTask(data);
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])
    console.log(individualTask);
    return (
        <div className="min-h-screen  bg-purple-300 bg-opacity-10  flex flex-col justify-center items-center">

            {
                loding ? <span className="loading loading-bars loading-lg"></span> : <form  className=" mt-12  w-1/2 py-16 px-5 shadow-xl rounded-2xl gap-y-3 border bg-white   flex flex-col justify-center items-center" action="">
                    <h1 className="text-4xl  mb-5">Edit a task</h1>
                    {/* input field */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"> Task title</span>

                        </label>
                        <input type="text" name="title" placeholder="Type here" className="input input-bordered w-full " />

                    </div>

                    {/* input field */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Description</span>

                        </label>
                        <textarea name="description" rows={5} className="textarea textarea-bordered" placeholder="Description"></textarea>
                    </div>

                    <div className="w-full grid gap-x-2 grid-cols-3">


                        {/* status field */}
                        <div className="form-control  w-full">
                            <label className="label">
                                <span className="label-text">Status</span>

                            </label>
                            <select name="status" className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select Status</option>
                                <option value={"todo"} >To do</option>
                                <option value={"progress"}>In progress</option>
                                <option value={'done'}>Done</option>
                            </select>
                        </div>

                        {/* assigned rules */}
                        <div className="form-control  w-full">
                            <label className="label">
                                <span className="label-text">Assigned User</span>

                            </label>
                            <select name="assigned_user" className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select user</option>
                                {
                                    AllUsersData && AllUsersData.map(item => <option
                                        key={item.id}
                                        value={item.email}

                                    >
                                        {item.email}
                                    </option>)
                                }
                            </select>
                        </div>

                        {/* time field */}
                        <div className="form-control w-full">

                            <label className="label">
                                <span className="label-text">DeadLine</span>

                            </label>
                            <input type="date" name="date" min={new Date().toISOString().split("T")[0]} placeholder="Type here" className="input input-bordered w-full " />

                        </div>

                    </div>


                    <div className="w-full mt-5 ">
                        <button className="btn  text-white bg-neutral"> Create a new task</button>
                    </div>
                </form>
            }
        </div>
    );
};

export default IndividualTask;