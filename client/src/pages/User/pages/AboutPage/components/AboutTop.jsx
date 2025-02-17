import About1 from "../../../../../assets/img/about/about1.jpg";
import Arowdown from "../../../../../assets/svg/arrowdown.svg";

const AboutTop = () => {
    return (
        <div className="flex justify-center text-center lg:text-left lg:justify-between gap-[30px]">
            <div className="flex flex-col pt-[20px] w-[95%] lg:w-[70%] lg:w-full items-center lg:items-start justify-between">
                <div className="flex flex-col w-[90%] items-left">
                    <h2 className="text-4xl lg:text-5xl xl:text-[65px] font-semibold leading-tight uppercase">
                        <span className="text-main font-bold">Mebli Dream</span>{" "}
                        — ваш надійний партнер у створенні меблів
                    </h2>
                    <div className="text-[18px] mt-[30px] text-darkgray">
                        Наша компанія спеціалізується на виготовленні меблів на
                        замовлення, поєднуючи сучасні технології, якісні
                        матеріали та індивідуальний підхід до кожного клієнта.
                        Ми розуміємо, що кожен інтер’єр унікальний, тому
                        створюємо рішення, які ідеально вписуються у ваш простір
                        і роблять його комфортним та функціональним.
                    </div>
                </div>
                <img
                    className="w-[100px] sm:w-[120px] lg:w-[150px] animate-bounce mt-[50px]"
                    src={Arowdown}
                    alt="Arrow down"
                />
            </div>
            <img
                className="w-[50%] h-[80vh] object-cover hidden lg:block shadow-custom"
                src={About1}
                alt="About Mebli Dream"
            />
        </div>
    );
};

export default AboutTop;
