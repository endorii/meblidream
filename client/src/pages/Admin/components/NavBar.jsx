import LogoAdmin from "../../../assets/logo-admin.png";
import Categories from "../../../assets/svg/categories.svg";
import CallBook from "../../../assets/svg/callbook.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="absolute left-0 top-0 w-[120px] h-[100vh] bg-main p-[10px] flex flex-col items-center gap-[20px]">
            <div className="mt-[10px]">
                <img className="w-[80px]" src={LogoAdmin} alt="" />
            </div>
            <hr className="border border-[#5376ea] w-[70%]" />
            <div className="flex flex-col gap-[15px]">
                <NavLink to="callbook">
                    {({ isActive }) => (
                        <img
                            className="w-[40px] transition duration-300 ease-in-out"
                            src={CallBook}
                            alt="Callbook Icon"
                            style={{
                                filter: isActive
                                    ? "brightness(0) invert(1)"
                                    : "none",
                            }}
                        />
                    )}
                </NavLink>
                <NavLink to="categories">
                    {({ isActive }) => (
                        <img
                            className="w-[40px] transition duration-300 ease-in-out"
                            src={Categories}
                            alt="Categories Icon"
                            style={{
                                filter: isActive
                                    ? "brightness(0) invert(1)"
                                    : "none",
                            }}
                        />
                    )}
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;
