import { get, ref, remove, set } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { database } from "../../firebase/firebase.config";
import { FetchContext } from "../../DataFetchState/DataFetchState";


const IndividualTask = () => {
    const { id } = useParams();
    const [fetchData , setFetchData]=useContext(FetchContext)
   const navigate = useNavigate()
    const [loding, setLoading] = useState(false)
    const [AllUsersData, setAllUsersData] = useState([])
    const [individualTask, setIndividualTask] = useState({})
    const [formData, setFormData] = useState({
        assigned_user: null,
        deadline: null,
        description: null,
        id: null,
        status: null,
        title: null
    })



    // the effect work for allUser item
    useEffect(() => {
        const dbRef = ref(database, "users"); // Create a reference to the "users" node
        get(dbRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    // console.log(data);
                    setAllUsersData(Object.values(data));
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [fetchData])

    // the effect work for Individual Task item
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
    }, [fetchData])

    // console.log(individualTask);
    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        // console.log(formData);
    }

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const status = form.status.value;
        const assigned_user = form.assigned_user.value;
        const deadline = form.date.value;


        const FormData = {
            assigned_user,
            deadline,
            description,
            status,
            title,
            id: id

        }

        // update here
        set(ref(database, `tasks/${id}`), FormData);
        setLoading(false)
        form.reset()
        setFetchData(!fetchData)
        navigate("/")
    }


    // delete 
    const hanleDelete = (e) => {
        remove(ref(database, "tasks/" + id))
        setFetchData(!fetchData)
        navigate("/")
    }

    return (
        <div className="min-h-screen  bg-purple-300 bg-opacity-10  flex flex-col justify-center items-center">

            <div className="mt-12  w-1/2 py-16 px-5 shadow-xl rounded-2xl gap-y-3 border bg-white">
                {
                    loding ? <span className="loading loading-bars loading-lg"></span> : <form onSubmit={handleSubmit} className=" w-full   flex flex-col justify-center items-center" action="">
                        <h1 className="text-4xl  mb-5">Edit a task</h1>
                        {/* input field */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Task title</span>

                            </label>
                            <input onChange={handleChanges} defaultValue={individualTask?.title} type="text" name="title" placeholder="Type here" className="input input-bordered w-full " />

                        </div>

                        {/* input field */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Description</span>

                            </label>
                            <textarea onChange={handleChanges} defaultValue={individualTask?.description} name="description" rows={5} className="textarea textarea-bordered" placeholder="Description"></textarea>
                        </div>

                        <div className="w-full grid gap-x-2 grid-cols-3">


                            {/* status field */}
                            <div className="form-control  w-full">
                                <label className="label">
                                    <span className="label-text">Status</span>

                                </label>
                                <select onChange={handleChanges} defaultValue={individualTask?.status} name="status" className="select select-bordered w-full max-w-xs">

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
                                <select onChange={handleChanges} defaultValue={individualTask?.assigned_user} name="assigned_user" className="select select-bordered w-full max-w-xs">

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
                                <input onChange={handleChanges} defaultValue={individualTask?.deadline} type="date" name="date" min={new Date().toISOString().split("T")[0]} placeholder="Type here" className="input input-bordered w-full " />

                            </div>

                        </div>

                        <div className="w-full flex gap-x-3 mt-5 ">
                        <button type="submit" className="btn  text-white bg-green-500"> Update the task</button>
                </div>
                    </form>
                }
                <button onClick={hanleDelete} className="btn  text-white bg-red-500"> delete the task</button>
                
            </div>
        </div>
    );
};

export default IndividualTask;