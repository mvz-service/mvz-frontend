import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout() {

    const loaction = useLocation();
    const isView = loaction.pathname.startsWith('/movie/view');

    return (
        <div className={`${isView ? "" : "md:pt-10"} bg-[#e6e6e6]`}>
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    )
    
}