import { useContext } from "react";
import { ProviderContext } from "../../../Provider/Provider";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../../firebase/firebase.config";
import { signOut } from "firebase/auth";


const Navbar = () => {
    const {user}=useContext(ProviderContext)

    const handleLogout = ()=> {

        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className="navbar flex justify-center items-center gap-x-7 text-lg bg-neutral text-neutral-content">
            <NavLink  to={'/'}><li className="list-none">Home</li></NavLink>
            <NavLink  to={user?.email ? "/addNewTask": '/login'}><li  className="list-none">Add new Task</li></NavLink>
            {
                user?.email ? <li  className="list-none cursor-pointer" onClick={handleLogout}>LogOut</li>: <Link to={'/login'}><li  className="list-none">Login</li></Link>
            }
        </div>
    );
};

export default Navbar;