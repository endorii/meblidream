import Logo from "../../assets/logo.png";
import Mail from "../../assets/svg/mail.svg";
import Phone from "../../assets/svg/phone.svg";
import BurgerIcon from "../../assets/svg/burger.svg?react";
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

    const infoData = [
        { title: "meblidream@i.com", photo: Mail },
        { title: "+380 99 443 12 80", photo: Phone },
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
            <header className="py-[10px] px-[20px] md:px-[35px] h-[70px] md:h-[80px] flex justify-between items-center fixed w-[100%] bg-white z-[100] shadow-custom">
                <div className="flex items-center">
                    <img className="w-[170px] xl:w-[200px]" src={Logo} alt="" />
                </div>
                <ul className="flex gap-[25px] text-black font-semibold hidden xl:flex 2xl:ml-[8%] 2xl:text-[16px]">
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
                    <MainButton bonusStyles="hidden sm:block">
                        Залишити заявку
                    </MainButton>

                    <ul className="hidden md:flex text-darkgray text-[15px] font-semibold flex-col gap-[2px]">
                        {infoData.map((elem, i) => {
                            return (
                                <li
                                    key={i}
                                    className="flex gap-[5px] items-center"
                                >
                                    <img
                                        className="w-[25px]"
                                        src={elem.photo}
                                        alt=""
                                    />
                                    {elem.title}
                                </li>
                            );
                        })}
                    </ul>
                    <BurgerIcon className="w-[40px] h-[27px] text-blue-500 stroke-black cursor-pointer block xl:hidden" />
                </div>
            </header>
            <progress
                className="fixed top-[70px] md:top-[80px] w-[100%] h-[3px] z-[100]"
                max="100"
                value={scrollProgress}
            ></progress>
        </>
    );
};

export default Header;
