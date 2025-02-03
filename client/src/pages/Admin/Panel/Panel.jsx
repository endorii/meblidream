import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Panel = () => {
    return (
        <div className="relative h-[100vh]">
            <NavBar></NavBar>
            <div className="ml-[100px] px-[50px] py-[25px] h-full overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Panel;
