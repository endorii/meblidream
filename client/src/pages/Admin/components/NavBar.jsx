import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import CallBookIcon from "../../../assets/svg/callbook.svg?react";
import CategoriesIcon from "../../../assets/svg/categories.svg?react";
import BurgerIcon from "../../../assets/svg/burger.svg?react";
import LogoutIcon from "../../../assets/svg/logout.svg?react";
import HomePageIcon from "../../../assets/svg/home.svg?react";

import Modal from "../../Modals/Modal";
import LogoutModal from "../../Modals/Logout/LogoutModal";
import { AnimatePresence, motion } from "motion/react";

const NavBar = ({ panelIsOpen, setPanelIsOpen }) => {
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const navigate = useNavigate();

    const pages = [
        { path: "", name: "Головна", Icon: HomePageIcon },
        { path: "callbook", name: "Дзвінки", Icon: CallBookIcon },
        { path: "categories", name: "Категорії", Icon: CategoriesIcon },
    ];

    return (
        <div
            className={`fixed z-[110] left-0 top-0 transition-all duration-300 h-[70px] w-full items-center md:h-[100vh] bg-white flex md:flex-col md:items-center justify-between gap-[20px] px-[20px] md:py-[30px] shadow-custom ${
                panelIsOpen ? "md:w-[230px]" : "md:w-[100px]"
            }`}
        >
            <div className="flex md:flex-col gap-[15px] ml-[20px] md:ml-0 items-center md:w-full">
                <div className="flex justify-center w-full hidden md:flex">
                    <BurgerIcon
                        onClick={() => setPanelIsOpen(!panelIsOpen)}
                        className="w-[40px] h-[27px] text-blue-500 stroke-black cursor-pointer"
                    />
                </div>
            </div>

            <div className="flex md:flex-col gap-[20px] md:mb-[250px] md:w-full">
                {pages.map(({ path, name, Icon }, i) => {
                    return (
                        <div
                            key={i}
                            className="relative flex justify-center w-full"
                        >
                            <NavLink to={path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center">
                                        <span
                                            className={`hidden md:absolute h-[80%] left-0 top-1/2 transform -translate-y-1/2 w-[6px] bg-mainbg rounded-r-[20px] transition-all duration-300 ${
                                                isActive ? "block" : "hidden"
                                            }`}
                                        ></span>
                                        <div
                                            className={`flex items-center rounded-xl hover:bg-mainbg group hover:fill-white hover:shadow-custom transition duration-300 ease-in-out ${
                                                isActive
                                                    ? "bg-mainbg fill-white"
                                                    : "fill-lightgray"
                                            }`}
                                        >
                                            {panelIsOpen && (
                                                <div
                                                    className={`group-hover:text-white pl-[15px] font-semibold hidden md:block ${
                                                        isActive
                                                            ? "text-white"
                                                            : ""
                                                    }`}
                                                >
                                                    {name}
                                                </div>
                                            )}
                                            <Icon
                                                className={`w-[40px] h-[40px] p-[7px] md:w-[65px] md:h-[55px] md:p-[15px] rounded-xl group-hover:fill-white transition duration-300 ease-in-out ${
                                                    isActive
                                                        ? "fill-white"
                                                        : "fill-lightgray"
                                                }`}
                                            />
                                        </div>
                                    </div>
                                )}
                            </NavLink>
                        </div>
                    );
                })}
            </div>

            <div className="flex flex-col gap-[15px] items-center md:w-full">
                <div className="flex justify-center w-full">
                    <LogoutIcon
                        className={`w-[40px] h-[40px] stroke-black p-[9px] bg-white rounded-xl hover:bg-mainbg hover:stroke-white hover:shadow-custom cursor-pointer`}
                        onClick={() => setIsLogoutModalOpen(true)}
                    />
                </div>
            </div>
            <AnimatePresence mode="wait">
                {isLogoutModalOpen && (
                    <Modal onClose={() => setIsLogoutModalOpen(false)}>
                        <motion.div
                            key="order-modal"
                            initial={{ scale: 0.4, y: "200vh" }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.4, y: "100vh" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <LogoutModal
                                onClose={() => setIsLogoutModalOpen(false)}
                                onAction={async () => {
                                    setIsLogoutModalOpen(false);
                                    navigate("/");
                                }}
                            />
                        </motion.div>
                    </Modal>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavBar;
