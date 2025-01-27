import Container from "../WelcomePage/components/Container";
import Instagram from "../../../../assets/svg/instagram.svg";
import Telegram from "../../../../assets/svg/telegram.svg";
import Facebook from "../../../../assets/svg/facebook.svg";
import Whatsapp from "../../../../assets/svg/whatsapp.svg";
import Phone from "../../../../assets/svg/phone.svg";
import Mail from "../../../../assets/svg/mail.svg";

const Contacts = () => {
    return (
        <div className="pt-[80px]">
            <Container>
                <div className="flex flex-col justify-center items-center text-[24px]">
                    <div className="text-[40px] text-main font-semibold ">
                        Маєте запитання або хочете здійснити замовлення?
                    </div>
                    <div className="text-darkgray">
                        Зв&apos;яжіться з нами зручним для вас способом, і ми з
                        радістю допоможемо вам знайти найкраще рішення!
                    </div>

                    <div className="text-darkgray">
                        Ми завжди раді бачити вас у числі наших клієнтів!
                    </div>
                </div>
                <div className="flex justify-center items-center mt-[50px]">
                    <div className="shadow-xl rounded-xl p-[50px] flex flex-col gap-[50px]">
                        <h3 className="text-[50px] font-[300] text-main uppercase  ">
                            Контактна інформація
                        </h3>
                        <div className="flex justify-around">
                            <ul className="text-[24px]">
                                <li className="flex gap-[10px]">
                                    <img
                                        className="w-[30px]"
                                        src={Phone}
                                        alt=""
                                    />{" "}
                                    +380 99 443 12 80
                                </li>
                                <li className="flex gap-[10px]">
                                    <img
                                        className="w-[30px]"
                                        src={Phone}
                                        alt=""
                                    />{" "}
                                    +380 99 443 12 80
                                </li>
                                <li className="flex gap-[10px]">
                                    <img
                                        className="w-[30px]"
                                        src={Mail}
                                        alt=""
                                    />{" "}
                                    meblidream@i.com
                                </li>
                            </ul>
                            <ul className="flex w-[100px] items-center flex-wrap gap-[15px]">
                                <li>
                                    <img
                                        className="w-[40px]"
                                        src={Telegram}
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="w-[40px]"
                                        src={Instagram}
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="w-[40px]"
                                        src={Facebook}
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="w-[40px]"
                                        src={Whatsapp}
                                        alt=""
                                    />
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
