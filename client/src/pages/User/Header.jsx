import Logo from "../../assets/logo.png";
import MailIcon from "../../assets/svg/mail.svg?react";
import PhoneIcon from "../../assets/svg/phone.svg?react";
import CloseIcon from "../../assets/svg/close.svg?react";
import BurgerIcon from "../../assets/svg/burger.svg?react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MainButton from "../ui/buttons/MainButton";

const Header = ({ setIsOrderModalOpen }) => {
    const links = [
        { name: "Головна", path: "/" },
        { name: "Про нас", path: "/about" },
        { name: "Галерея робіт", path: "/gallery" },
        { name: "Меблева продукція", path: "/products" },
        { name: "Контакти", path: "/contacts" },
    ];

    const [scrollProgress, setScrollProgress] = useState(0);
    const [burgerOpen, setBurgerOpen] = useState(false);

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
                    <Link to="/">
                        <img
                            className="w-[170px] xl:w-[200px]"
                            src={Logo}
                            alt=""
                        />
                    </Link>
                </div>
                <ul className="hidden flex gap-[25px] text-black font-semibold hidden xl:visible xl:flex 2xl:ml-[8%] 2xl:text-[16px]">
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
                    <MainButton
                        onClose={() => setIsOrderModalOpen(true)}
                        bonusStyles="hidden sm:block"
                    >
                        Залишити заявку
                    </MainButton>

                    <ul className="hidden md:flex text-darkgray text-[15px] font-semibold flex-col gap-[2px]">
                        <li>
                            <a
                                href="mailto:meblidream@i.com"
                                className="flex gap-[5px] items-center hover:underline"
                            >
                                <MailIcon className="w-[25px] stroke-main" />
                                meblidream@i.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+380994431280"
                                className="flex gap-[5px] items-center hover:underline"
                            >
                                <PhoneIcon className="w-[25px] fill-main" />
                                +380 99 443 12 80
                            </a>
                        </li>
                    </ul>
                    {!burgerOpen ? (
                        <BurgerIcon
                            onClick={() => setBurgerOpen(!burgerOpen)}
                            className="w-[40px] h-[27px] text-blue-500 stroke-black cursor-pointer block xl:hidden"
                        />
                    ) : (
                        <CloseIcon
                            onClick={() => setBurgerOpen(!burgerOpen)}
                            className="w-[40px] h-[27px] text-blue-500 stroke-black cursor-pointer block xl:hidden"
                        />
                    )}
                </div>
            </header>
            <progress
                className="fixed top-[69px] md:top-[79px] w-[100%] h-[3px] z-[100]"
                max="100"
                value={scrollProgress}
            ></progress>

            <div
                className={`visible fixed z-[50] backdrop-blur-[50px] shadow-custom w-full sm:w-[60%] md:w-[45%] xl:hidden top-0 right-0 h-[100vh] flex flex-col justify-center
        transition-transform duration-300 ease-in-out 
        ${burgerOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <ul className="flex flex-col gap-[10px] justify-center text-center px-[50px] pb-[40px]">
                    {links.map((link, i) => (
                        <NavLink
                            onClick={() => setBurgerOpen(false)}
                            to={link.path}
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "underline text-main text-[24px] font-semibold"
                                    : "text-[24px] font-semibold"
                            }
                            key={i}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </ul>
                <ul className="vissible md:hidden flex items-center text-darkgray text-[16px] font-semibold flex-col gap-[2px] px-[30px] pb-[10px]">
                    <li>
                        <a
                            href="mailto:meblidream@i.com"
                            className="flex gap-[5px] items-center underline"
                        >
                            <MailIcon className="w-[25px] stroke-main" />
                            meblidream@i.com
                        </a>
                    </li>
                    <li>
                        <a
                            href="tel:+380994431280"
                            className="flex gap-[5px] items-center underline"
                        >
                            <PhoneIcon className="w-[25px] fill-main" />
                            +380 99 443 12 80
                        </a>
                    </li>
                </ul>
                <MainButton
                    bonusStyles="visible sm:hidden m-[30px]"
                    onClose={() => {
                        setIsOrderModalOpen(true);
                    }}
                >
                    Залишити заявку
                </MainButton>
            </div>
        </>
    );
};

export default Header;
