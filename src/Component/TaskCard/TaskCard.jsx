import { Link } from "react-router-dom";


const TaskCard = ({ item }) => {
    // console.log(item);
    return (
        <Link to={`/specificTask/${item?.id}`} >
            <div className="border my-4 cursor-pointer bg-slate-100">
                <div className="p-3 ">{item?.title}</div>
            </div>
        </Link>
    );
};

export default TaskCard;