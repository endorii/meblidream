import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Loader from "../../ui/Loader/Loader";
import ScrollToTop from "../../ui/ScrollToTop/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { auth } from "../../../actions/auth.actions";

const Panel = () => {
    const [panelIsOpen, setPanelIsOpen] = useState(false);

    const handleClosePanel = () => {
        setPanelIsOpen(false);
    };

    const token = localStorage.getItem("accessToken");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(auth());
    }, []);

    useEffect(() => {
        if (!token) {
            navigate("/admin/login");
        }
    }, [token]);

    return (
        <div className="relative h-[100vh]">
            <Toaster position="bottom-right" reverseOrder={false} />
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
