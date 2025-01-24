import Container from "./Container";
import Logo from "../../../assets/svg/logo.svg";

const Footer = () => {
    return (
        <div className="bg-main">
            <Container>
                <div className="flex justify-between p-[30px_100px]">
                    <div>
                        <div className="flex items-center">
                            <img
                                className="w-[50px] h-[50px]"
                                src={Logo}
                                alt=""
                            />
                            <div className="text-white font-semibold text-2xl">
                                Mebli Dream
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-[15px] text-white font-bold text-[18px] uppercase">
                            Навігація
                        </div>
                        <ul className="text-gray font-semibold flex flex-col gap-[7px]">
                            <li className="hover:text-white">Головна</li>
                            <li className="hover:text-white">Про нас</li>
                            <li className="hover:text-white">Наші роботи</li>
                            <li className="hover:text-white">Заглушка</li>
                            <li className="hover:text-white">Контакти</li>
                        </ul>
                    </div>
                    <div>
                        <div className="mb-[15px] text-white font-bold text-[18px] uppercase">
                            Що ми створюємо
                        </div>
                        <ul className="text-gray font-semibold flex flex-col gap-[7px]">
                            <li className="hover:text-white">Шафи</li>
                            <li className="hover:text-white">Кухні</li>
                            <li className="hover:text-white">Прихожі</li>
                            <li className="hover:text-white">Спальні</li>
                            <li className="hover:text-white">
                                Торгове обладняння
                            </li>
                            <li className="hover:text-white">
                                Спеціалізовані меблі
                            </li>
                            <li className="hover:text-white">Офісні меблі</li>
                            <li className="hover:text-white">Елітні меблі</li>
                        </ul>
                    </div>
                    <div>
                        <div className="mb-[15px] text-white font-bold text-[18px] uppercase">
                            Графіки\контакти
                        </div>
                        <ul className="text-gray font-semibold flex flex-col gap-[7px]">
                            <li>Понеділок - П&apos;ятниця</li>
                            <li>09:00 - 18:00</li>
                            <li>Субота - Неділя</li>
                            <li>Вихідний</li>
                            <li>+380 99 443 12 80</li>
                            <li>
                                <button className="mt-[10px] border border-bray text-white font-semibold rounded-xl px-[30px] py-[15px] hover:border-main hover:text-main hover:bg-white transition duration-300 ease-in-out">
                                    Замовити консультацію
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="mb-[15px] text-white font-bold text-[18px] uppercase">
                            Наші соц. мережі
                        </div>
                        <ul className="text-gray font-semibold flex flex-col gap-[7px]">
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
