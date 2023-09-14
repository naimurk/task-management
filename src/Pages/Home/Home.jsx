import { Link } from "react-router-dom";
import TaskCard from "../../Component/TaskCard/TaskCard";
import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "../../firebase/firebase.config";


const Home = () => {
    const [AlltaskData, setAllTaskData] = useState([])
    const [loading, setLoading] = useState(true)
    const [todoData,setTodoData]=useState([])
    const [progressData,setprogressData]=useState([])
    const [doneData,setTodoneData]=useState([])

    useEffect(() => {
        const dbRef = ref(database, "tasks"); // Create a reference to the "users" node
        get(dbRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    //  console.log(data);
                    setAllTaskData(Object.values(data));
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])
    //  console.log(AlltaskData);
    useEffect(() => {
        const todoDatas = AlltaskData && AlltaskData.filter(item => item.status == "todo")
        const progressDatas = AlltaskData && AlltaskData.filter(item => item.status == "progress")
        const doneDatas = AlltaskData && AlltaskData.filter(item => item.status == "done")
        setTodoData(todoDatas)
        setprogressData(progressDatas)
        setTodoneData(doneDatas)
        setLoading(false)
    }, [AlltaskData])
    // console.log(todoData);
    // console.log(progressData);
    // console.log(doneData);
    return (
        <div className="flex justify-center items-center">

            {
                loading ? <span className="loading loading-bars loading-lg"></span> : <div className="grid text-center mt-12 w-2/3 grid-cols-4 justify-center items-start gap-5">
                    {/* to do part */}
                    <div className="w-full border overflow-y-scroll h-[600px]">
                        <p className="text-white font-semibold  bg-purple-500 px-5 py-2 ">To do</p>
                        <div className="px-3">
                            {
                                todoData && todoData.map(item => <TaskCard
                                    key={item.id}
                                    item={item}
                                >

                                </TaskCard>)

                            }

                        </div>
                    </div>
                    <div className="w-full border overflow-y-scroll h-[600px]">
                        <p className="text-white font-semibold  bg-blue-500 px-5 py-2 ">In progress</p>
                        <div className="px-3">
                            {
                                progressData && progressData.map(item => <TaskCard
                                    key={item.id}
                                    item={item}
                                >

                                </TaskCard>)

                            }
                        </div>
                    </div>
                    <div className="w-full border overflow-y-scroll h-[600px]">
                        <p className="text-white font-semibold  bg-orange-500 px-5 py-2 ">Done</p>
                        <div className="px-3">
                            {
                                doneData && doneData.map(item => <TaskCard
                                    key={item.id}
                                    item={item}
                                >

                                </TaskCard>)

                            }
                        </div>
                    </div>

                    <div className=" border">
                        {/* <p className="text-white font-semibold  bg-purple-500 px-5 py-2 ">To do</p> */}
                        <Link to={"/addNewTask"}><button className="btn bg-green-400 w-full">Add New Task +</button></Link>

                    </div>

                </div>
            }
        </div>
    );
};

export default Home;