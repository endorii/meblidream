import Container from "./pages/WelcomePage/components/Container";
import Logo from "../../assets/logo.png";
import MailIcon from "../../assets/svg/mail.svg?react";
import PhoneIcon from "../../assets/svg/phone.svg?react";
import InstagramIcon from "../../assets/svg/instagram.svg?react";
import TelegramIcon from "../../assets/svg/telegram.svg?react";
import WhatsAppIcon from "../../assets/svg/whatsapp.svg?react";
import FacebookIcon from "../../assets/svg/facebook.svg?react";
import MainButton from "../ui/buttons/MainButton";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/slices/categories.slice";

const Footer = ({ setIsOrderModalOpen }) => {
    const links = [
        { name: "Головна", path: "/" },
        { name: "Про нас", path: "/about" },
        { name: "Галерея робіт", path: "/gallery" },
        { name: "Меблева продукція", path: "/products" },
        { name: "Контакти", path: "/contacts" },
    ];

    const { categories } = useSelector((state) => state.categories);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="mt-[70px]">
            <div className="bg-main p-[10px] sm:p-[0px] h-[70px] sm:h-[50px] text-center text-[16px] text-white flex items-center justify-center">
                Робочі години: Понеділок - П&apos;ятниця (09:00 - 18:00) /
                Субота - Неділя (Вихідний)
            </div>
            <Container>
                <div className="flex justify-between gap-[30px] flex-wrap p-[10px] xl:p-[20] 2xl:p-[20px_100px]">
                    <div>
                        <div className="flex items-center">
                            <Link to="/">
                                {" "}
                                <img className="w-[200px]" src={Logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="mb-[15px] text-main font-bold text-[18px] uppercase">
                            Навігація
                        </div>
                        <ul className="text-darkgray text-[15px] font-semibold flex flex-col gap-[7px]">
                            {links.map((link, i) => (
                                <li key={i}>
                                    <NavLink
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
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="mb-[15px] text-main font-bold text-[18px] uppercase">
                            Що ми створюємо
                        </div>
                        <ul className="text-darkgray text-[15px] font-semibold flex flex-col gap-[7px]">
                            {categories.map((category, i) => {
                                return (
                                    <li key={i}>
                                        <NavLink
                                            to={`/products/${category.pathName}`}
                                            className={({
                                                isActive,
                                                isPending,
                                            }) =>
                                                isPending
                                                    ? "pending"
                                                    : isActive
                                                    ? "underline text-main"
                                                    : ""
                                            }
                                        >
                                            {category.displayName}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <div className="mb-[15px] text-main font-bold text-[18px] uppercase">
                            Графіки\контакти
                        </div>
                        <ul className="text-darkgray text-[15px] font-semibold flex flex-col gap-[7px]">
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
                            <li>
                                <MainButton
                                    bonusStyles={"w-full mt-[15px]"}
                                    onClick={() => setIsOrderModalOpen(true)}
                                >
                                    Залишити заявку
                                </MainButton>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="mb-[15px] text-main font-bold text-[18px] uppercase">
                            Наші соц. мережі
                        </div>
                        <ul className="text-darkgray text-[15px] font-semibold flex flex-wrap items-start gap-[3px]">
                            <li className="p-[10px] rounded-[50%] border border-transperent hover:border hover:border-main/10 hover:bg-main/5 cursor-pointer transition duration-300 ease-in-out">
                                <InstagramIcon className="fill-main w-[30px] " />
                            </li>
                            <li className="p-[10px] rounded-[50%] border border-transperent hover:border hover:border-main/10 hover:bg-main/5 cursor-pointer transition duration-300 ease-in-out">
                                <TelegramIcon className="fill-main w-[30px] " />
                            </li>
                            <li className="p-[10px] rounded-[50%] border border-transperent hover:border hover:border-main/10 hover:bg-main/5 cursor-pointer transition duration-300 ease-in-out">
                                <WhatsAppIcon className="fill-main w-[30px] " />
                            </li>
                            <li className="p-[10px] rounded-[50%] border border-transperent hover:border hover:border-main/10 hover:bg-main/5 cursor-pointer transition duration-300 ease-in-out">
                                <FacebookIcon className="fill-main w-[30px] " />
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
