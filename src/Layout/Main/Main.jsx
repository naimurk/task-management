import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import { useContext, useEffect } from "react";
import { ProviderContext } from "../../Provider/Provider";
import Swal from "sweetalert2";


const Main = () => {
    const { user } = useContext(ProviderContext)
    const navigate = useNavigate()

    useEffect(() => {
        // Check if the user is not logged in and redirect to the login page
        if (!user) {
          navigate("/login");
        }
      }, [user, navigate]);
    return (
        <div>
        <Navbar></Navbar>
        <div id="" className="min-h-screen">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Main;