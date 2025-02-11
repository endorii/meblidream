import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Request from "./Request";
import Loader from "../ui/Loader/Loader";
import ScrollToTop from "../ui/ScrollToTop/ScrollToTop";

const Wrapper = () => {
    return (
        <>
            <Header></Header>
            <Loader />
            <ScrollToTop />
            <div>
                <Outlet />
            </div>
            <Request></Request>
            <Footer></Footer>
        </>
    );
};

export default Wrapper;
