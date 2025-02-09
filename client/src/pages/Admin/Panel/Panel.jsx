import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";

const Panel = () => {
    const [panelIsOpen, setPanelIsOpen] = useState(false);

    const handleClosePanel = () => {
        setPanelIsOpen(false);
    };

    return (
        <div className="relative h-[100vh] ">
            <NavBar panelIsOpen={panelIsOpen} setPanelIsOpen={setPanelIsOpen} />
            <div
                className="pt-[70px] p-[20px] md:ml-[100px] md:px-[50px] md:py-[25px] h-full overflow-y-auto"
                onClick={handleClosePanel}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default Panel;
