import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProviderContext } from "../../Provider/Provider";


const TaskCard = ({ item }) => {
    const {user}=useContext(ProviderContext)
    // console.log(item);
    return (
        <Link to={user?.email ? `/specificTask/${item?.id}`: "/login"} >
            <div className="border my-4 hover:bg-neutral hover:text-white cursor-pointer bg-slate-100">
                <div className="p-3 ">{item?.title}</div>
            </div>
        </Link>
    );
};

export default TaskCard;