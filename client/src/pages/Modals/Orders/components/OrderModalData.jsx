import MainButton from "../../../ui/buttons/MainButton";
import ArrowLeftIcon from "../../../../assets/svg/arrow-left.svg?react";
import MailIcon from "../../../../assets/svg/mail.svg?react";
import PhoneIcon from "../../../../assets/svg/phone.svg?react";
import InstagramIcon from "../../../../assets/svg/instagram.svg?react";
import TelegramIcon from "../../../../assets/svg/telegram.svg?react";
import FacebookIcon from "../../../../assets/svg/facebook.svg?react";
const OrderModalData = ({ onClose }) => {
    const data = [
        {
            text: "+380 99 443 12 80",
            href: "tel:+380994431280",
            icon: (
                <PhoneIcon className="group-hover:fill-main w-[25px] fill-white" />
            ),
        },
        {
            text: "meblidream@i.ua",
            href: "mailto:meblidream@i.ua",
            icon: (
                <MailIcon className="group-hover:stroke-main w-[25px] stroke-white" />
            ),
        },
    ];

    const socials = [
        {
            link: import.meta.env.VITE_INSTAGRAM_URL,
            icon: <InstagramIcon className="fill-white w-[25px]" />,
        },
        {
            link: import.meta.env.VITE_TELEGRAM_URL,
            icon: <TelegramIcon className="fill-white w-[25px]" />,
        },
        {
            link: import.meta.env.VITE_FACEBOOK_URL,
            icon: <FacebookIcon className="fill-white w-[25px]" />,
        },
    ];

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
            <div className="flex flex-col gap-[10px] sm:gap-[20px] mt-[30px] w-full">
                {data.map((item, i) => (
                    <a key={i} href={item.href}>
                        <div className="flex items-center gap-[10px] text-white text-[16px] sm:text-[20px] p-[20px] rounded-xl border border-transparent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out">
                            {item.icon}
                            {item.text}
                        </div>
                    </a>
                ))}
            </div>
            <ul className="flex mt-[30px] xl:mt-[10%] gap-[5px]">
                {socials.map((social, i) => (
                    <li
                        key={i}
                        className="p-[15px] hover:bg-main/30 rounded-[50%] border border-transparent hover:border hover:border-main hover:bg-main/30 cursor-pointer transition duration-300 ease-in-out"
                    >
                        <a href={social.link} target="_blank">
                            {social.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderModalData;
