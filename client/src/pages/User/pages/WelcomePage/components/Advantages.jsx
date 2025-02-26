import Container from "./Container";
import Adv1 from "../../../../../assets/img/adv1.jpg";
import Adv2 from "../../../../../assets/img/adv2.jpg";
import Adv3 from "../../../../../assets/img/adv3.jpg";
import Title from "../../../../ui/Title";

const content = [
    {
        title: "Виготовляємо меблі під замовлення понад 15-ть років!",
        subtitle:
            "Ми маємо багаторічний досвід у виробництві меблів, що дозволяє нам створювати продуктинайвищої якості. Завдяки 15-річному стажу, миточно знаємо, як реалізувати навіть найскладніші ідеї наших клієнтів, забезпечуючи надійність, довговічність і стиль у кожному виробі.",
        img: Adv1,
    },
    {
        title: "Більше 5-ти тисяч задоволених клієнтів!",
        subtitle:
            "Нам довіряють тисячі людей, і кожен клієнт для нас — це можливість перевершити очікування. Ми пишаємося тим, що наша репутація ґрунтується на вдячних відгуках і довірі, які ми заслужили завдяки індивідуальному підходу, професіоналізму та високим стандартам обслуговування.",
        img: Adv2,
    },
    {
        title: "Якісно та швидко!",
        subtitle:
            "Ми розуміємо, наскільки важливими є терміни виконання замовлення, тому оптимізуємо всі процеси, не жертвуючи якістю. Використовуючи сучасні матеріали та передові технології, ми гарантуємо, що кожен наш виріб відповідатиме вашим очікуванням та буде готовий у домовлені строки.",
        img: Adv3,
    },
];

const AdvantageItem = ({ title, subtitle, img, reverse }) => {
    return (
        <div
            className={`flex items-center flex-col gap-[30px] xl:gap-[100px] ${
                reverse ? "xl:flex-row-reverse" : "xl:flex-row"
            }`}
        >
            <div className="w-full xl:w-[50%]">
                <h3 className="text-[30px] sm:text-[35px] xl:text-[40px] font-bold uppercase text-main">
                    {title}
                </h3>
                <hr className="my-[10px] border-main border w-[20%]" />
                <div className="text-dark text-[18px] xl:text-[22px]">
                    {subtitle}
                </div>
            </div>
            <img
                className="w-full xl:w-[45%] h-[450px] object-cover shadow-custom"
                src={img}
                alt={title}
            />
        </div>
    );
};

const Advantages = () => {
    return (
        <div>
            <Container>
                <Title title={"Чому варто обрати нас?"} />
                <div className="flex flex-col gap-[55px] p-[10px]">
                    {content.map((adv, index) => (
                        <AdvantageItem
                            key={index}
                            {...adv}
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Advantages;
