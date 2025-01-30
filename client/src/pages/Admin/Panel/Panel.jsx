import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Panel = () => {
    return (
        <div className="relative bg-main h-[100vh] p-[10px]">
            <NavBar></NavBar>
            <div className="ml-[115px] px-[50px] py-[25px] bg-white h-full rounded-[50px] overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Panel;
