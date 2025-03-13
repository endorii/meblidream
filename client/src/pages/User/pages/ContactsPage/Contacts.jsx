import Container from "../WelcomePage/components/Container";
import InstagramIcon from "../../../../assets/svg/instagram.svg?react";
import TelegramIcon from "../../../../assets/svg/telegram.svg?react";
import FacebookIcon from "../../../../assets/svg/facebook.svg?react";
import PhoneIcon from "../../../../assets/svg/phone.svg?react";
import MailIcon from "../../../../assets/svg/mail.svg?react";

const Contacts = () => {
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
            text: "Instagram",
            link: import.meta.env.VITE_INSTAGRAM_URL,
            icon: (
                <InstagramIcon className="group-hover:fill-main fill-white w-[22px]" />
            ),
        },
        {
            text: "Facebook",
            link: import.meta.env.VITE_TELEGRAM_URL,
            icon: (
                <TelegramIcon className="group-hover:fill-main fill-white w-[22px]" />
            ),
        },
        {
            text: "Telegram",
            link: import.meta.env.VITE_FACEBOOK_URL,
            icon: (
                <FacebookIcon className="group-hover:fill-main fill-white w-[22px]" />
            ),
        },
    ];

    return (
        <div className="pt-[70px]">
            <Container>
                <div className="flex flex-col justify-center items-center p-5 text-2xl">
                    <h2 className="text-4xl lg:text-5xl xl:text-[65px] text-center font-bold uppercase leading-tight">
                        Маєте запитання або хочете здійснити замовлення?
                    </h2>
                    <p className="w-[90%] sm:w-[80%] text-lg mt-[25px] text-darkgray text-center">
                        Зв&apos;яжіться з нами зручним для вас способом, і ми з
                        радістю допоможемо вам знайти найкраще рішення!
                    </p>
                </div>

                <div className="flex justify-center mt-[30px]">
                    <div className="shadow-custom bg-mainbg rounded-xl p-[30px] text-center sm:text-left sm:p-[40px] flex flex-col gap-[20px] w-[95%] md:w-[90%] lg:w-[70%] 2xl:w-[50%]">
                        <h3 className="text-[36px] font-semibold text-white uppercase">
                            Контактна інформація
                        </h3>
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-wrap gap-[20px] justify-center sm:justify-start">
                                {data.map((item, i) => (
                                    <a key={i} href={item.href}>
                                        <div className="flex gap-[5px] text-white text-[18px] sm:text-[22px] transition duration-300 ease-in-out px-[30px] py-[15px] rounded-xl border border-transparent group border-white hover:bg-white hover:text-main">
                                            {item.icon}
                                            {item.text}
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div>
                                <div className="text-white mb-[10px] text-[18px]">
                                    ми в соц. мережах:{" "}
                                </div>

                                <div className="flex flex-wrap gap-[20px] justify-center sm:justify-start">
                                    {socials.map((social, i) => (
                                        <a
                                            key={i}
                                            target="_blank"
                                            href={social.link}
                                        >
                                            <div className="flex gap-[10px] text-white text-[18px] sm:text-[22px] transition duration-300 ease-in-out px-[30px] py-[15px] rounded-xl border border-transparent group border-white hover:bg-white hover:text-main">
                                                {social.icon}
                                                {social.text}
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contacts;
