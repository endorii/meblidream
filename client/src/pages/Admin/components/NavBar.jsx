import { Link, NavLink } from "react-router-dom";
import CallBookIcon from "../../../assets/svg/callbook.svg?react";
import CategoriesIcon from "../../../assets/svg/categories.svg?react";
import BurgerIcon from "../../../assets/svg/burger.svg?react";
import LogoutIcon from "../../../assets/svg/logout.svg?react";
import HomePageIcon from "../../../assets/svg/home.svg?react";

const NavBar = ({ panelIsOpen, setPanelIsOpen }) => {
    return (
        <div
            className={`fixed z-[10] left-0 top-0 transition-all duration-300 h-[70px] w-full items-center md:h-[100vh] bg-white flex md:flex-col md:items-center justify-between md:justify-between gap-[20px] px-[20px] md:py-[30px] md:px-[0px] shadow-custom ${
                panelIsOpen ? " md:w-[230px]" : " md:w-[100px]"
            }`}
        >
            <div className="flex md:flex-col gap-[15px] items-center md:w-full">
                <div className="flex justify-center w-[100%]">
                    <div>
                        <BurgerIcon
                            onClick={() => {
                                setPanelIsOpen(!panelIsOpen);
                            }}
                            className="w-[40px] h-[27px] text-blue-500 stroke-black cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            <div className="flex md:flex-col gap-[20px] md:mb-[250px] md:w-full">
                <div className="relative flex justify-center w-full">
                    <NavLink to="/admin" end>
                        {({ isActive }) => (
                            <div className="flex items-center">
                                <span
                                    className={`hidden md:absolute h-[80%] left-0 top-[50%] translate-y-[-50%] bottom-0 w-[6px] bg-mainbg rounded-r-[20px] transition-all duration-300 duration-400 ease-in-out ${
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
                                    {panelIsOpen ? (
                                        <div
                                            className={`group-hover:text-white pl-[15px] font-semibold ${
                                                isActive ? "text-white" : ""
                                            }`}
                                        >
                                            Головна
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <HomePageIcon
                                        className={`w-[40px] h-[40px] p-[7px] md:w-[65px]  md:h-[55px]  md:p-[15px] rounded-xl group-hover:fill-white transition duration-300 ease-in-out
                                            ${
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
                <div className="relative flex justify-center w-full">
                    <NavLink to="callbook">
                        {({ isActive }) => (
                            <div className="flex items-center">
                                <span
                                    className={`hidden md:absolute h-[80%] left-0 top-[50%] translate-y-[-50%] bottom-0 w-[6px] bg-mainbg rounded-r-[20px] transition-all duration-300 duration-400 ease-in-out ${
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
                                    {panelIsOpen ? (
                                        <div
                                            className={`group-hover:text-white pl-[15px] font-semibold ${
                                                isActive ? "text-white" : ""
                                            }`}
                                        >
                                            Дзвінки
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <CallBookIcon
                                        className={`w-[40px] h-[40px] p-[7px] md:w-[65px]  md:h-[55px]  md:p-[15px] rounded-xl group-hover:fill-white transition duration-300 ease-in-out
                                            ${
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

                <div className="relative flex justify-center w-full">
                    <NavLink to="categories">
                        {({ isActive }) => (
                            <div className="flex items-center">
                                <span
                                    className={`hidden md:absolute h-[80%] left-0 top-[50%] translate-y-[-50%] bottom-0 w-[6px] bg-mainbg rounded-r-[20px] transition-all duration-300 duration-400 ease-in-out ${
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
                                    {panelIsOpen ? (
                                        <div
                                            className={`group-hover:text-white pl-[15px] font-semibold ${
                                                isActive ? "text-white" : ""
                                            }`}
                                        >
                                            Категорії
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <CategoriesIcon
                                        className={`w-[40px] h-[40px] p-[7px] md:w-[65px]  md:h-[55px]  md:p-[15px] rounded-xl group-hover:fill-white transition duration-300 ease-in-out
                                            ${
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
            </div>
            <div className="flex flex-col gap-[15px] items-center md:w-full">
                <div className="flex justify-center w-[100%]">
                    <Link to="/">
                        <LogoutIcon
                            className={`w-[40px] h-[40px] stroke-black p-[9px] bg-white rounded-xl hover:bg-mainbg hover:stroke-white hover:shadow-custom transition-colors duration-300 ease-in-out`}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
