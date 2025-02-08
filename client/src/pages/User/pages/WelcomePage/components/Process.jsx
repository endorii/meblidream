import Steps from "../../../../../assets/img/steps.jpg";
import Container from "./Container";
import Title from "../../../../ui/Title";

const Process = () => {
    return (
        <div className="w-[100vw] h-full">
            <Container>
                <Title title={"Як проходить процес"} />
            </Container>
            <div className="relative">
                <img
                    className="w-[100%] h-[130vh] object-cover"
                    src={Steps}
                    alt=""
                />
                <div className="absolute top-[21%] left-[27%] h-[5vh] w-[55px] bg-mainbg text-white text-[18px] font-bold text-center rounded-[50%] border-2 flex justify-center items-center z-[10]">
                    1
                </div>

                <div className="absolute top-[12.5%] left-[29.8%] text-white z-[10] w-[40%] xl:w-[18%] bg-white p-[20px] shadow-custom rounded">
                    <div className="text-[20px] xl:text-[24px] font-bold text-main leading-[23px]">
                        Відправка заявки
                    </div>
                    <div className="mt-[10px] text-[13px] leading-[16px] xl:text-[15px] text-dark">
                        Залиште заявку на зворотній дзвінок або зателефонуєте
                        нам самі
                    </div>
                </div>

                <div className="absolute top-[22.8%] left-[29%] w-[24%] h-[2px] bg-mainbg text-main text-[18px] font-bold text-center border-[2px] flex justify-center items-center"></div>

                <div className="absolute top-[21%] left-[52%] h-[5vh] w-[55px] bg-mainbg text-white text-[18px] font-bold text-center rounded-[50%] border-2 flex justify-center items-center z-[10]">
                    2
                    <div className="absolute top-[23%] left-[55.2%] w-[2px] h-[56%] bg-mainbg text-main text-[18px] font-bold text-center border-[2px] flex justify-center items-center z-[0]"></div>
                </div>

                <div className="absolute top-[13.5%] left-[55.3%] text-white z-[10] w-[40%] xl:w-[18%] bg-white p-[20px] shadow-custom rounded">
                    <div className="text-[20px] xl:text-[24px] font-bold text-main leading-[23px]">
                        Замір
                    </div>
                    <div className="mt-[10px] text-[13px] leading-[16px] xl:text-[15px] text-dark">
                        Проводимо заміри і готуємо дизайн проект меблів.
                    </div>
                </div>

                <div className="absolute top-[33%] left-[52%] h-[5vh] w-[55px] bg-mainbg text-white text-[18px] font-bold text-center rounded-[50%] border-2 flex justify-center items-center z-[10]">
                    3
                </div>

                <div className="absolute top-[29.2%] left-[55.5%] text-white z-[10] w-[40%] xl:w-[17%] bg-white p-[20px] shadow-custom rounded">
                    <div className="text-[20px] xl:text-[24px] font-bold text-main leading-[23px]">
                        Розрахунок вартості
                    </div>
                    <div className="mt-[10px] text-[13px] leading-[16px] xl:text-[15px] text-dark">
                        Після узгодження дизайна, матеріалів та розмірів, робимо
                        розрахунок вартості.
                    </div>
                </div>

                <div className="absolute top-[48%] left-[52%] h-[5vh] w-[55px] bg-mainbg text-white text-[18px] font-bold text-center rounded-[50%] border-2 flex justify-center items-center z-[10]">
                    4
                </div>

                <div className="absolute top-[45%] left-[55.5%] text-white z-[10] w-[40%] xl:w-[17%] bg-white p-[20px] shadow-custom rounded">
                    <div className="text-[20px] xl:text-[24px] font-bold text-main leading-[23px]">
                        Виготовлення меблів
                    </div>
                    <div className="mt-[10px] text-[13px] leading-[16px] xl:text-[15px] text-dark">
                        Виготовляємо меблі на власному виробництві в Луцьку.
                    </div>
                </div>

                <div className="absolute top-[62%] left-[52%] h-[5vh] w-[55px] bg-mainbg text-white text-[18px] font-bold text-center rounded-[50%] border-2 flex justify-center items-center z-[10]">
                    5
                </div>

                <div className="absolute top-[59.5%] left-[55.5%] text-white z-[10] w-[40%] xl:w-[17%] bg-white p-[20px] shadow-custom rounded">
                    <div className="text-[20px] xl:text-[24px] font-bold text-main leading-[23px]">
                        Доставка
                    </div>
                    <div className="mt-[10px] text-[13px] leading-[16px] xl:text-[15px] text-dark">
                        Доставляємо меблі до Вас.
                    </div>
                </div>

                <div className="absolute top-[78%] left-[52%] h-[5vh] w-[55px] bg-mainbg text-white text-[18px] font-bold text-center rounded-[50%] border-2 flex justify-center items-center z-[10]">
                    6
                </div>

                <div className="absolute top-[75.5%] left-[55.5%] text-white z-[10] w-[40%] xl:w-[17%] bg-white p-[20px] shadow-custom rounded">
                    <div className="text-[20px] xl:text-[24px] font-bold text-main leading-[23px]">
                        Монтаж
                    </div>
                    <div className="mt-[10px] text-[13px] leading-[16px] xl:text-[15px] text-dark">
                        Монтуємо меблі у Вашому помешканні.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
