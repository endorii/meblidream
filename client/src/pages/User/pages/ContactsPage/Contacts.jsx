import Container from "../WelcomePage/components/Container";
import InstagramIcon from "../../../../assets/svg/instagram.svg?react";
// import TelegramIcon from "../../../../assets/svg/telegram.svg?react";
// import FacebookIcon from "../../../../assets/svg/facebook.svg?react";
// import WhatsappIcon from "../../../../assets/svg/whatsapp.svg?react";
import PhoneIcon from "../../../../assets/svg/phone.svg?react";
import MailIcon from "../../../../assets/svg/mail.svg?react";

const contactNumbers = ["+380 99 443 12 80", "+380 99 443 12 80"];

const Contacts = () => {
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
                    <div className="shadow-custom rounded-xl p-[30px] sm:p-[50px] flex flex-col gap-6 w-[95%] md:w-[85%] lg:w-[60%] 2xl:w-[50%]">
                        <h3 className="text-[34px] text-center font-semibold text-main uppercase">
                            Контактна інформація
                        </h3>

                        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[50px] justify-center items-center">
                            <ul className="text-2xl flex flex-col gap-[10px] pb-[30px] md:pr-[50px] border-b-2 md:border-r-2 md:border-b-0 border-main border-dashed">
                                {contactNumbers.map((number, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-[10px] text-balck text-[16px] sm:text-[20px] p-[20px] rounded-xl border border-transperent hover:border hover:border-main hover:bg-main/5 cursor-pointer transition duration-300 ease-in-out"
                                    >
                                        <PhoneIcon className="w-[30px] fill-main" />
                                        {number}
                                    </li>
                                ))}
                                <li className="flex items-center gap-[10px] text-balck text-[16px] sm:text-[20px] p-[20px] rounded-xl border border-transperent hover:border hover:border-main hover:bg-main/5 cursor-pointer transition duration-300 ease-in-out">
                                    <MailIcon className="w-[30px] stroke-main" />
                                    meblidream@i.com
                                </li>
                            </ul>

                            <ul className="flex items-center flex-col flex-wrap gap-[10px]">
                                <li className="flex items-center gap-[10px] text-balck text-[16px] sm:text-[20px] p-[20px] rounded-xl border border-transperent hover:border hover:border-main hover:bg-main/5 cursor-pointer transition duration-300 ease-in-out">
                                    Instagram
                                    <InstagramIcon className="w-[35px] fill-main" />
                                </li>
                                <li className="flex items-center gap-[10px] text-balck text-[16px] sm:text-[20px] p-[20px] rounded-xl border border-transperent hover:border hover:border-main hover:bg-main/5 cursor-pointer transition duration-300 ease-in-out">
                                    Facebook
                                    <InstagramIcon className="w-[35px] fill-main" />
                                </li>
                                <li className="flex items-center gap-[10px] text-balck text-[16px] sm:text-[20px] p-[20px] rounded-xl border border-transperent hover:border hover:border-main hover:bg-main/5 cursor-pointer transition duration-300 ease-in-out">
                                    Telegram
                                    <InstagramIcon className="w-[35px] fill-main" />
                                </li>
                                <li className="flex items-center gap-[10px] text-balck text-[16px] sm:text-[20px] p-[20px] rounded-xl border border-transperent hover:border hover:border-main hover:bg-main/5 cursor-pointer transition duration-300 ease-in-out">
                                    WhatsApp
                                    <InstagramIcon className="w-[35px] fill-main" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contacts;
