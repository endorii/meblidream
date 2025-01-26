import Logo from "../../assets/svg/logo.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Telegram from "../../assets/svg/telegram.svg";
import Facebook from "../../assets/svg/facebook.svg";
import Whatsapp from "../../assets/svg/whatsapp.svg";
import Phone from "../../assets/svg/phone.svg";
import { useEffect, useState } from "react";

const Header = () => {
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
                    <img className="w-[50px]" src={Logo} alt="" />
                    <div className="text-main font-semibold text-2xl">
                        Mebli Dream
                    </div>
                </div>
                <ul className="flex gap-[25px] text-black font-semibold">
                    <li>Головна</li>
                    <li>Про нас</li>
                    <li>Галерея робіт</li>
                    <li>Меблева продукція</li>
                    <li>Контакти</li>
                </ul>
                <div className="flex gap-[30px]">
                    <button className="border border-main text-main font-semibold rounded-xl px-[30px] py-[15px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                        Замовити консультацію
                    </button>

                    <ul className="flex gap-[15px] items-center">
                        <li>
                            <img className="w-[25px]" src={Instagram} alt="" />
                        </li>
                        <li>
                            <img className="w-[25px]" src={Facebook} alt="" />
                        </li>
                        <li>
                            <img className="w-[25px]" src={Telegram} alt="" />
                        </li>
                        <li>
                            <img className="w-[25px]" src={Whatsapp} alt="" />
                        </li>
                        <li>
                            <img className="w-[25px]" src={Phone} alt="" />
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
