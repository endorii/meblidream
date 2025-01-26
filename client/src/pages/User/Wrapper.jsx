import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Request from "./Request";

const Wrapper = () => {
    return (
        <>
            <Header></Header>
            <div>
                <Outlet />
            </div>
            <Request></Request>
            <Footer></Footer>
        </>
    );
};

export default Wrapper;
