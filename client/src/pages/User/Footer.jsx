import Container from "./pages/WelcomePage/components/Container";
import Logo from "../../assets/svg/logo.svg";

const Footer = () => {
    return (
        <div className="mt-[70px]">
            <div className="bg-main h-[50px] text-center text-[16px] text-white flex items-center justify-center">
                Наші робочі години: Понеділок - П&apos;ятниця 09:00 - 18:00 /
                Субота - Неділя Вихідний
            </div>
            <Container>
                <div className="flex justify-between p-[20px_100px]">
                    <div>
                        <div className="flex items-center">
                            <img
                                className="w-[50px] h-[50px]"
                                src={Logo}
                                alt=""
                            />
                            <div className="text-main font-semibold text-2xl">
                                Mebli Dream
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-[15px] text-main font-bold text-[18px] uppercase">
                            Навігація
                        </div>
                        <ul className="text-darkgray text-[15px] font-semibold flex flex-col gap-[7px]">
                            <li className="hover:text-darkblue">Головна</li>
                            <li className="hover:text-darkblue">Про нас</li>
                            <li className="hover:text-darkblue">Наші роботи</li>
                            <li className="hover:text-darkblue">Заглушка</li>
                            <li className="hover:text-darkblue">Контакти</li>
                        </ul>
                    </div>
                    <div>
                        <div className="mb-[15px] text-main font-bold text-[18px] uppercase">
                            Що ми створюємо
                        </div>
                        <ul className="text-darkgray text-[15px] font-semibold flex flex-col gap-[7px]">
                            <li className="hover:text-darkblue">Шафи</li>
                            <li className="hover:text-darkblue">Кухні</li>
                            <li className="hover:text-darkblue">Прихожі</li>
                            <li className="hover:text-darkblue">Спальні</li>
                            <li className="hover:text-darkblue">
                                Торгове обладняння
                            </li>
                            <li className="hover:text-darkblue">
                                Спеціалізовані меблі
                            </li>
                            <li className="hover:text-darkblue">
                                Офісні меблі
                            </li>
                            <li className="hover:text-darkblue">
                                Елітні меблі
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="mb-[15px] text-main font-bold text-[18px] uppercase">
                            Графіки\контакти
                        </div>
                        <ul className="text-darkgray text-[15px] font-semibold flex flex-col gap-[7px]">
                            <li>meblidream@i.com</li>

                            <li>+380 99 443 12 80</li>
                            <li>
                                <button className="mt-[10px] border border-main text-main font-semibold rounded-xl px-[30px] py-[15px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                    Замовити консультацію
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="mb-[15px] text-main font-bold text-[18px] uppercase">
                            Наші соц. мережі
                        </div>
                        <ul className="text-darkgray text-[15px] font-semibold flex flex-col gap-[7px]">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Telegram</li>
                            <li>Whatsapp</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
