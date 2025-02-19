import MainButton from "../../../ui/buttons/MainButton";

import ArrowLeftIcon from "../../../../assets/svg/arrow-left.svg?react";
import MailIcon from "../../../../assets/svg/mail.svg?react";
import PhoneIcon from "../../../../assets/svg/phone.svg?react";
import InstagramIcon from "../../../../assets/svg/instagram.svg?react";
import TelegramIcon from "../../../../assets/svg/telegram.svg?react";
import WhatsAppIcon from "../../../../assets/svg/whatsapp.svg?react";
import FacebookIcon from "../../../../assets/svg/facebook.svg?react";
const OrderModalData = ({ onClose }) => {
    return (
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left sm:justify-between w-full ">
            <MainButton
                bonusStyles="flex items-center gap-[10px] group"
                onClick={onClose}
            >
                <ArrowLeftIcon className="stroke-white w-[30px] group-hover:stroke-main" />
                Повернутися назад
            </MainButton>
            <div className="text-white text-[34px] sm:text-[38px] lg:text-[48px] font-semibold w-[90%] mt-[20px] sm:mt-[10px]">
                Давайте реалізуємо меблі вашої{" "}
                <span className="text-lightmain font-bold underline">мрії</span>{" "}
                разом
            </div>
            <ul className="flex flex-col gap-[10px] sm:gap-[20px] mt-[30px] w-full">
                <li className="flex items-center gap-[10px] text-white text-[16px] sm:text-[20px] p-[20px] rounded-xl border border-transparent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                    <MailIcon className="stroke-lightmain w-[30px] " />
                    meblidream@i.com
                </li>
                <li className="flex items-center gap-[10px] text-white text-[16px] sm:text-[20px] p-[20px] rounded-xl border border-transparent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                    <PhoneIcon className="fill-lightmain w-[30px] " />
                    +38 097 00 00 000
                </li>
                <li className="flex items-center gap-[10px] text-white text-[16px] sm:text-[20px] p-[20px] rounded-xl border border-transparent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                    <PhoneIcon className="fill-lightmain w-[30px] " />
                    +38 097 00 00 001
                </li>
            </ul>
            <ul className="flex mt-[30px] xl:mt-[10%] gap-[5px]">
                <li className="p-[15px] hover:bg-main/30 rounded-[50%] border border-transparent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                    <InstagramIcon className="fill-white w-[25px] " />
                </li>
                <li className="p-[15px] hover:bg-main/30 rounded-[50%] border border-transparent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                    <TelegramIcon className="fill-white w-[25px] " />
                </li>
                <li className="p-[15px] hover:bg-main/30 rounded-[50%] border border-transparent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                    <WhatsAppIcon className="fill-white w-[25px] " />
                </li>
                <li className="p-[15px] hover:bg-main/30 rounded-[50%] border border-transparent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                    <FacebookIcon className="fill-white w-[25px] " />
                </li>
            </ul>
        </div>
    );
};

export default OrderModalData;
