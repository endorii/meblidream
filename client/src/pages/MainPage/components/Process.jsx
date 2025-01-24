import Steps from "../../../assets/img/steps.jpg";
import Container from "./Container";

const Process = () => {
    return (
        <>
            <Container>
                <div className="flex items-center justify-between">
                    <h2 className="text-[70px] uppercase font-semibold text-darkblue tracking-[1px] mx-[50px]">
                        Як проходить процес
                    </h2>
                    <hr className="w-[45%] border text-darkblue" />
                </div>
            </Container>
            <div className="relative">
                <img src={Steps} alt="" />
                <div className="absolute top-[21%] left-[27%] w-[50px] h-[50px] bg-main text-white text-[18px] font-bold text-center rounded-[50%] border-2 flex justify-center items-center z-[10]">
                    1
                </div>

                <div className="absolute top-[12.5%] left-[29.8%] text-white z-[10] w-[17%] bg-white p-[20px] shadow-2xl rounded">
                    <div className="text-[24px] font-bold text-main">
                        Відправка заявки
                    </div>
                    <div className="mt-[10px] text-[15px] text-dark">
                        Залиште заявку на зворотній дзвінок або зателефонуєте
                        нам самі
                    </div>
                </div>

                <div className="absolute top-[22.5%] left-[29%] w-[450px] h-[2px] bg-main text-main text-[18px] font-bold text-center border-[2px] flex justify-center items-center"></div>

                <div className="absolute top-[21%] left-[52%] w-[50px] h-[50px] bg-main text-white text-[18px] font-bold text-center rounded-[50%] border-2 flex justify-center items-center z-[10]">
                    2
                </div>

                <div className="absolute top-[13.5%] left-[55.3%] text-white z-[10] w-[17%] bg-white p-[20px] shadow-2xl rounded">
                    <div className="text-[24px] font-bold text-main">Замір</div>
                    <div className="mt-[10px] text-[15px] text-dark">
                        Проводимо заміри і готуємо дизайн проект меблів.
                    </div>
                </div>

                <div className="absolute top-[23%] left-[53.2%] w-[2px] h-[850px] bg-main text-main text-[18px] font-bold text-center border-[2px] flex justify-center items-center z-[0]"></div>

                <div className="absolute top-[33%] left-[52%] w-[50px] h-[50px] bg-main text-white text-[18px] font-bold text-center rounded-[50%] border-2 flex justify-center items-center z-[10]">
                    3
                </div>

                <div className="absolute top-[29.2%] left-[55.5%] text-white z-[10] w-[17%] bg-white p-[20px] shadow-2xl rounded">
                    <div className="text-[24px] font-bold text-main">
                        Розрахунок вартості
                    </div>
                    <div className="mt-[10px] text-[15px] text-dark">
                        Після узгодження дизайна, матеріалів та розмірів, робимо
                        розрахунок вартості.
                    </div>
                </div>

                <div className="absolute top-[48%] left-[52%] w-[50px] h-[50px] bg-main text-white text-[18px] font-bold text-center rounded-[50%] border-2 flex justify-center items-center z-[10]">
                    4
                </div>

                <div className="absolute top-[45%] left-[55.5%] text-white z-[10] w-[17%] bg-white p-[20px] shadow-2xl rounded">
                    <div className="text-[24px] font-bold text-main">
                        Виготовлення меблів
                    </div>
                    <div className="mt-[10px] text-[15px] text-dark">
                        Виготовляємо меблі на власному виробництві в Луцьку.
                    </div>
                </div>

                <div className="absolute top-[62%] left-[52%] w-[50px] h-[50px] bg-main text-white text-[18px] font-bold text-center rounded-[50%] border-2 flex justify-center items-center z-[10]">
                    5
                </div>

                <div className="absolute top-[59.5%] left-[55.5%] text-white z-[10] w-[17%] bg-white p-[20px] shadow-2xl rounded">
                    <div className="text-[24px] font-bold text-main">
                        Доставка
                    </div>
                    <div className="mt-[10px] text-[15px] text-dark">
                        Доставляємо меблі до Вас.
                    </div>
                </div>

                <div className="absolute top-[78%] left-[52%] w-[50px] h-[50px] bg-main text-white text-[18px] font-bold text-center rounded-[50%] border-2 flex justify-center items-center z-[10]">
                    6
                </div>

                <div className="absolute top-[75.5%] left-[55.5%] text-white z-[10] w-[17%] bg-white p-[20px] shadow-2xl rounded">
                    <div className="text-[24px] font-bold text-main">
                        Монтаж
                    </div>
                    <div className="mt-[10px] text-[15px] text-dark">
                        Монтуємо меблі у Вашому помешканні.
                    </div>
                </div>
            </div>
        </>
    );
};

export default Process;
