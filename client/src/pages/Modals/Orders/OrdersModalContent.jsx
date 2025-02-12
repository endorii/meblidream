import MainButton from "../../ui/buttons/MainButton";

import ArrowLeftIcon from "../../../assets/svg/arrow-left.svg?react";

import MailIcon from "../../../assets/svg/mail.svg?react";
import PhoneIcon from "../../../assets/svg/phone.svg?react";

import InstagramIcon from "../../../assets/svg/instagram.svg?react";
import TelegramIcon from "../../../assets/svg/telegram.svg?react";
import WhatsAppIcon from "../../../assets/svg/whatsapp.svg?react";
import FacebookIcon from "../../../assets/svg/facebook.svg?react";
import SecondaryButton from "../../ui/buttons/SecondaryButton";

const OrdersModalContent = ({ onClose }) => {
    return (
        <div className="bg-darkblue flex gap-[50px] p-[20px] md:p-[40px] rounded-2xl shadow-custom relative w-[95vw] xl:w-[85vw] h-[95vh] xl:h-[85vh] overflow-y-auto flex-col xl:flex-row">
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left sm:justify-between w-[90%] ">
                <SecondaryButton
                    bonusStyles="flex items-center gap-[10px] group"
                    onClose={onClose}
                >
                    <ArrowLeftIcon className="stroke-main w-[30px] group-hover:stroke-white" />
                    Повернутися назад
                </SecondaryButton>
                <div className="text-white text-[38px] lg:text-[48px] font-semibold w-[90%] mt-[10px]">
                    Давайте реалізуємо меблі вашої{" "}
                    <span className="text-lightmain font-bold underline">
                        мрії
                    </span>{" "}
                    разом
                </div>
                <ul className="flex flex-col gap-[20px] mt-[30px] w-full">
                    <li className="flex items-center gap-[10px] text-white text-[20px] p-[20px] rounded-xl border border-transperent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                        <MailIcon className="stroke-lightmain w-[30px] " />
                        meblidream@i.com
                    </li>
                    <li className="flex items-center gap-[10px] text-white text-[20px] p-[20px] rounded-xl border border-transperent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                        <PhoneIcon className="fill-lightmain w-[30px] " />
                        +38 097 00 00 000
                    </li>
                    <li className="flex items-center gap-[10px] text-white text-[20px] p-[20px] rounded-xl border border-transperent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                        <PhoneIcon className="fill-lightmain w-[30px] " />
                        +38 097 00 00 001
                    </li>
                </ul>
                <ul className="flex mt-[30px] xl:mt-[10%] gap-[5px]">
                    <li className="p-[15px] hover:bg-main/30 rounded-[50%] border border-transperent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                        <InstagramIcon className="fill-white w-[25px] " />
                    </li>
                    <li className="p-[15px] hover:bg-main/30 rounded-[50%] border border-transperent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                        <TelegramIcon className="fill-white w-[25px] " />
                    </li>
                    <li className="p-[15px] hover:bg-main/30 rounded-[50%] border border-transperent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                        <WhatsAppIcon className="fill-white w-[25px] " />
                    </li>
                    <li className="p-[15px] hover:bg-main/30 rounded-[50%] border border-transperent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                        <FacebookIcon className="fill-white w-[25px] " />
                    </li>
                </ul>
            </div>
            <div className="bg-white flex flex-col gap-[20px] h-full rounded-2xl p-[20px] md:p-[40px] w-full">
                <div className="flex flex-col gap-[10px] ">
                    <div className="text-[18px] font-semibold">
                        Я зацікавлений в...
                    </div>

                    <ul className="flex flex-wrap gap-[10px] text-center">
                        <li className="py-[13px] px-[20px] border border-main rounded-xl text-main hover:bg-mainbg hover:text-white cursor-pointer">
                            Здійсненні замовлення
                        </li>
                        <li className="py-[13px] px-[20px] border border-main rounded-xl text-main hover:bg-mainbg hover:text-white cursor-pointer">
                            Отриманні консультації
                        </li>
                        <li className="py-[13px] px-[20px] border border-main rounded-xl text-main hover:bg-mainbg hover:text-white cursor-pointer">
                            Іншому
                        </li>
                    </ul>
                </div>
                <form
                    className="flex flex-col gap-[20px] mt-[30px] bg-white"
                    action=""
                >
                    <div className="flex flex-col gap-[15px]">
                        <div className="flex flex-col gap-[5px]">
                            <label
                                className="text-[16px] font-semibold"
                                // htmlFor="firstName"
                            >
                                Ім&apos;я та прізвище:
                            </label>
                            <input
                                className="p-[10px] border-b border-darkgray h-[50px] w-full"
                                type="text"
                                // id="firstName"
                                // name="firstName"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            <label
                                className="text-[16px] font-semibold"
                                // htmlFor="phone"
                            >
                                Номер телефону:
                            </label>
                            <input
                                className="p-[10px] border-b border-darkgray h-[50px] w-full"
                                type="tel"
                                // id="phone"
                                // name="phone"
                                pattern="[0-9]{10}"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            <label
                                className="text-[16px] font-semibold"
                                // htmlFor="message"
                            >
                                Повідомлення:
                            </label>
                            <textarea
                                className="p-[10px] border-b border-darkgray h-[50px]"
                                // id="message"
                                // name="message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <MainButton bonusStyles="">Відправити</MainButton>
                </form>
            </div>
        </div>
    );
};

export default OrdersModalContent;
