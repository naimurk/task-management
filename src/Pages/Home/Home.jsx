import { Link } from "react-router-dom";
import TaskCard from "../../Component/TaskCard/TaskCard";


const Home = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid text-center mt-12 w-2/3 grid-cols-4 justify-center items-start gap-5">
                <div className="w-full border overflow-y-scroll h-[600px]">
                    <p className="text-white font-semibold  bg-purple-500 px-5 py-2 ">To do</p>
                    <div className="px-3">
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                    </div>
                </div>
                <div className="w-full border overflow-y-scroll h-[600px]">
                    <p className="text-white font-semibold  bg-blue-500 px-5 py-2 ">In progress</p>
                    <div className="px-3">
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                    </div>
                </div>
                <div className="w-full border overflow-y-scroll h-[600px]">
                    <p className="text-white font-semibold  bg-orange-500 px-5 py-2 ">Done</p>
                    <div className="px-3">
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                         <TaskCard></TaskCard>
                    </div>
                </div>

                <div className=" border">
                    {/* <p className="text-white font-semibold  bg-purple-500 px-5 py-2 ">To do</p> */}
                    <Link to={"/addNewTask"}><button className="btn bg-green-400 w-full">Add New Task +</button></Link>
                    
                </div>
               
            </div>
        </div>
    );
};

export default Home;