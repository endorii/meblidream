import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Loader from "../../ui/Loader/Loader";
import ScrollToTop from "../../ui/ScrollToTop/ScrollToTop";

const Panel = () => {
    const [panelIsOpen, setPanelIsOpen] = useState(false);

    const handleClosePanel = () => {
        setPanelIsOpen(false);
    };

    return (
        <div className="relative h-[100vh]">
            <Loader />
            <ScrollToTop />
            <NavBar panelIsOpen={panelIsOpen} setPanelIsOpen={setPanelIsOpen} />

            <div
                className="pt-[90px] p-[20px] md:ml-[100px] md:px-[50px] md:py-[0px]"
                onClick={handleClosePanel}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default Panel;
