import { child, get, ref, set } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { database } from "../../../firebase/firebase.config";
import { v4 as uuidv4 } from 'uuid'
import { ProviderContext } from "../../../Provider/Provider";
import { FetchContext } from "../../../DataFetchState/DataFetchState";


const AddNewTask = () => {

    const [AllUsersData, setAllUsersData] = useState([])
    const [loding, setLoading] = useState(false)
    
   const [fetchData , setFetchData]=useContext(FetchContext)

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
    }, [fetchData])


    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const status = form.status.value;
        const assigned_user = form.assigned_user.value;
        const deadline = form.date.value;

        const task_id = uuidv4()
        const FormData = {
            assigned_user,
            deadline,
            description,
            status,
            title,
            id: task_id
        }
        // console.log(FormData, task_id);
        set(ref(database, 'tasks/' + task_id), FormData);
        form.reset()
        setLoading(false)
        setFetchData(!fetchData)
    }
    // console.log(AllUsersData);
    return (
        <div className="min-h-screen  bg-purple-300 bg-opacity-10  flex flex-col justify-center items-center">

            {
                loding ? <span className="loading loading-bars loading-lg"></span> : <form onSubmit={handleSubmit} className=" mt-12  w-1/2 py-16 px-5 shadow-xl rounded-2xl gap-y-3 border bg-white   flex flex-col justify-center items-center" action="">
                    <h1 className="text-4xl  mb-5">Create a task</h1>
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

export default AddNewTask;