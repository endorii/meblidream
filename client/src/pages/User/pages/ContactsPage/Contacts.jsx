import Container from "../WelcomePage/components/Container";
import Instagram from "../../../../assets/svg/instagram.svg";
import Telegram from "../../../../assets/svg/telegram.svg";
import Facebook from "../../../../assets/svg/facebook.svg";
import Whatsapp from "../../../../assets/svg/whatsapp.svg";
import Phone from "../../../../assets/svg/phone.svg";
import Mail from "../../../../assets/svg/mail.svg";

const contactNumbers = ["+380 99 443 12 80", "+380 99 443 12 80"];
const socialIcons = [Telegram, Instagram, Facebook, Whatsapp];

const Contacts = () => {
    return (
        <div className="pt-[70px]">
            <Container>
                <div className="flex flex-col justify-center items-center p-5 text-2xl">
                    <h2 className="text-4xl lg:text-5xl xl:text-[70px] text-center font-medium leading-tight">
                        Маєте запитання або хочете здійснити замовлення?
                    </h2>
                    <p className="w-[90%] sm:w-[80%] text-lg mt-6 text-darkgray text-center">
                        Зв&apos;яжіться з нами зручним для вас способом, і ми з
                        радістю допоможемо вам знайти найкраще рішення!
                    </p>
                </div>

                <div className="flex justify-center items-center mt-[30px]">
                    <div className="shadow-custom rounded-xl p-[40px] sm:p-[50px] flex flex-col gap-12">
                        <h3 className="text-3xl md:text-4xl text-center font-light text-main uppercase">
                            Контактна інформація
                        </h3>

                        <div className="flex justify-around gap-[50px] flex-wrap">
                            <ul className="text-2xl flex flex-col gap-[10px]">
                                {contactNumbers.map((number, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-[7px] text-[20px]"
                                    >
                                        <img
                                            className="w-[30px]"
                                            src={Phone}
                                            alt="Phone"
                                        />
                                        {number}
                                    </li>
                                ))}
                                <li className="flex gap-[7px] text-[20px]">
                                    <img
                                        className="w-[30px]"
                                        src={Mail}
                                        alt="Mail"
                                    />
                                    meblidream@i.com
                                </li>
                            </ul>

                            <ul className="flex w-[100px] items-center flex-wrap gap-4">
                                {socialIcons.map((icon, index) => (
                                    <li key={index}>
                                        <img
                                            className="w-[40px]"
                                            src={icon}
                                            alt="Social Icon"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contacts;
