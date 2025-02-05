import Logo from "../../assets/logo.png";
import Mail from "../../assets/svg/mail.svg";
import Phone from "../../assets/svg/phone.svg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MainButton from "../ui/buttons/MainButton";

const Header = () => {
    const links = [
        { name: "Головна", path: "/" },
        { name: "Про нас", path: "/about" },
        { name: "Галерея робіт", path: "/gallery" },
        { name: "Меблева продукція", path: "/products" },
        { name: "Контакти", path: "/contacts" },
    ];

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / windowHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="py-[10px] px-[35px] h-[80px] flex justify-between items-center fixed w-[100%] bg-white z-[100]">
                <div className="flex items-center">
                    <img className="w-[200px]" src={Logo} alt="" />
                </div>
                <ul className="flex gap-[25px] text-black font-semibold ml-[8%]">
                    {links.map((link, i) => (
                        <NavLink
                            key={i}
                            to={link.path}
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "underline text-main"
                                    : ""
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </ul>
                <div className="flex items-center gap-[30px]">
                    <MainButton>Залишити заявку</MainButton>

                    <ul className="text-darkgray text-[15px] font-semibold flex flex-col gap-[2px]">
                        <li className="flex gap-[5px] items-center">
                            <img className="w-[25px]" src={Mail} alt="" />
                            meblidream@i.com
                        </li>
                        <li className="flex gap-[5px] items-center">
                            <img className="w-[25px]" src={Phone} alt="" />
                            +380 99 443 12 80
                        </li>
                    </ul>
                </div>
            </header>
            <progress
                className="fixed top-[80px] w-[100%] h-[3px] z-[100]"
                max="100"
                value={scrollProgress}
            ></progress>
        </>
    );
};

export default Header;
