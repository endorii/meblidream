import Container from "../WelcomePage/components/Container";
import About1 from "../../../../assets/img/about/about1.jpg";
import Why1 from "../../../../assets/img/about/why1.jpg";
import Why2 from "../../../../assets/img/about/why2.jpg";

const About = () => {
    return (
        <div className="pt-[80px]">
            <Container>
                <div className="flex justify-between gap-[60px]">
                    <div className="">
                        <div className="text-[60px] font-[500] leading-[70px]">
                            Ми,{" "}
                            <span className="text-main font-bold">
                                Mebli Dream
                            </span>{" "}
                            — ваш надійний партнер у створенні меблів, що
                            відповідають вашому стилю, потребам та{" "}
                            <span className="text-main font-bold">мріям</span>!
                        </div>
                        <div className="text-[20px] mt-[30px] text-darkgray">
                            Наша компанія спеціалізується на виготовленні меблів
                            на замовлення, поєднуючи сучасні технології, якісні
                            матеріали та індивідуальний підхід до кожного
                            клієнта. Ми розуміємо, що кожен інтер’єр унікальний,
                            тому створюємо рішення, які ідеально вписуються у
                            ваш простір і роблять його комфортним та
                            функціональним.
                        </div>
                    </div>
                    <img
                        className="w-[50%] h-[80vh] object-cover"
                        src={About1}
                        alt=""
                    />
                </div>
                <div>
                    <div className="flex items-center justify-between py-[50px]">
                        <hr className="w-[20%] border text-darkblue" />
                        <h2 className="text-[70px] text-center uppercase font-semibold text-darkblue tracking-[1px] m-[50px]">
                            Чому обирають нас?
                        </h2>
                        <hr className="w-[20%] border text-darkblue" />
                    </div>
                    <div className="flex flex-col gap-[50px]">
                        <div className="flex items-center justify-between gap-[50px]">
                            <img
                                className="w-[55%] h-[55vh] object-cover"
                                src={Why1}
                                alt=""
                            />
                            <div className="w-[45%]">
                                <div className="text-[40px] font-semibold uppercase text-main">
                                    Індивідуальний підхід
                                </div>
                                <hr className="my-[10px] border-main border w-[20%]" />
                                <div className="text-[22px] text-darkgray">
                                    Ми прислухаємось до ваших ідей та побажань,
                                    щоб створити меблі, які відображають ваш
                                    стиль і потреби.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-[50px]">
                            <div className="w-[45%]">
                                <div className="text-[40px] font-semibold uppercase text-main">
                                    Якість матеріалів
                                </div>
                                <hr className="my-[10px] border-main border w-[20%]" />
                                <div className="text-[22px] text-darkgray">
                                    Ми використовуємо лише перевірені матеріали
                                    від надійних постачальників, щоб забезпечити
                                    довговічність і естетичність нашої
                                    продукції.
                                </div>
                            </div>
                            <img
                                className="w-[70%] h-[55vh] object-cover"
                                src={Why2}
                                alt=""
                            />
                        </div>
                        <div className="flex items-center justify-between gap-[50px]">
                            <img
                                className="w-[70%] h-[55vh] object-cover"
                                src={Why1}
                                alt=""
                            />
                            <div className="w-[45%]">
                                <div className="text-[40px] font-semibold uppercase text-main">
                                    Сучасні технології
                                </div>
                                <hr className="my-[10px] border-main border w-[20%]" />
                                <div className="text-[22px] text-darkgray">
                                    Наше виробництво оснащене новітнім
                                    обладнанням, яке гарантує точність і
                                    бездоганний результат у кожній деталі.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-[50px]">
                            <div className="w-[45%]">
                                <div className="text-[40px] font-semibold uppercase text-main">
                                    Досвід та професіоналізм
                                </div>
                                <hr className="my-[10px] border-main border w-[20%]" />
                                <div className="text-[22px] text-darkgray">
                                    Наша команда складається з досвідчених
                                    дизайнерів, майстрів і технологів, які
                                    працюють разом, щоб реалізувати навіть
                                    найскладніші проєкти.
                                </div>
                            </div>
                            <img
                                className="w-[70%] h-[55vh] object-cover"
                                src={Why2}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between py-[50px]">
                        <hr className="w-[20%] border text-darkblue" />
                        <h2 className="text-[70px] text-center uppercase font-semibold text-darkblue tracking-[1px] m-[50px]">
                            Що ми пропонуємо?
                        </h2>
                        <hr className="w-[20%] border text-darkblue" />
                    </div>
                    <div className="flex justify-center gap-[30px]">
                        <div className="w-[25%] ">
                            <div className="h-[150px]">
                                <div className="text-main font-bold leading-[40px] text-center text-[40px]">
                                    Меблі для дому:
                                </div>
                                <div className="text-darkgray text-center m-[10px]">
                                    кухні, вітальні, спальні, дитячі кімнати.
                                </div>
                            </div>
                            <div className="flex flex-col gap-[30px]">
                                <img src={About1} alt="" />
                                <img src={Why1} alt="" />
                                <img src={Why2} alt="" />
                            </div>
                        </div>
                        <div className="w-[25%] ">
                            <div className="h-[150px]">
                                <div className="text-main font-bold leading-[40px] text-center text-[40px]">
                                    Офісні меблі:
                                </div>
                                <div className="text-darkgray text-center m-[10px]">
                                    столи, шафи, полиці та інші елементи для
                                    комфортної роботи.
                                </div>
                            </div>
                            <div className="flex flex-col gap-[30px]">
                                <img src={Why1} alt="" />
                                <img src={Why2} alt="" />
                                <img src={About1} alt="" />
                            </div>
                        </div>
                        <div className="w-[25%] ">
                            <div className="h-[150px]">
                                <div className="text-main font-bold leading-[40px] text-center text-[40px]">
                                    Комерційні меблі:
                                </div>
                                <div className="text-darkgray text-center m-[10px]">
                                    кафе, ресторанів, магазинів та інших
                                    комерційних приміщень.
                                </div>
                            </div>
                            <div className="flex flex-col gap-[30px]">
                                <img src={Why2} alt="" />
                                <img src={About1} alt="" />
                                <img src={Why1} alt="" />
                            </div>
                        </div>
                        <div className="w-[25%] ">
                            <div className="h-[150px]">
                                <div className="text-main font-bold leading-[40px] text-center text-[40px]">
                                    Інші види меблів:
                                </div>
                                <div className="text-darkgray text-center m-[10px]">
                                    декоративні та функціональні рішення для
                                    вашого інтер&apos;єру.
                                </div>
                            </div>
                            <div className="flex flex-col gap-[30px]">
                                <img src={About1} alt="" />
                                <img src={Why1} alt="" />
                                <img src={Why2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;
