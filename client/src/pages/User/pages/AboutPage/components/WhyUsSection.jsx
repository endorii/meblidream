import TitleCentered from "../../../../ui/TitleCentered";
import Why1 from "../../../../../assets/img/about/why1.jpg";
import Why2 from "../../../../../assets/img/about/why2.jpg";

const whyUsData = [
    {
        title: "Індивідуальний підхід",
        text: "Ми прислухаємось до ваших ідей та побажань, щоб створити меблі, які відображають ваш стиль і потреби.",
        img: Why1,
        reverse: false,
    },
    {
        title: "Якість матеріалів",
        text: "Ми використовуємо лише перевірені матеріали від надійних постачальників, щоб забезпечити довговічність і естетичність нашої продукції.",
        img: Why2,
        reverse: true,
    },
    {
        title: "Сучасні технології",
        text: "Наше виробництво оснащене новітнім обладнанням, яке гарантує точність і бездоганний результат у кожній деталі.",
        img: Why1,
        reverse: false,
    },
    {
        title: "Досвід та професіоналізм",
        text: "Наша команда складається з досвідчених дизайнерів, майстрів і технологів, які працюють разом, щоб реалізувати навіть найскладніші проєкти.",
        img: Why2,
        reverse: true,
    },
];

const WhyUsSection = () => {
    return (
        <div>
            <TitleCentered title={"Чому обирають нас?"} />
            <div className="flex flex-col gap-12">
                {whyUsData.map(({ title, text, img, reverse }, index) => (
                    <div
                        key={index}
                        className={`flex items-center flex-col gap-[30px] xl:gap-[100px] ${
                            reverse ? "xl:flex-row-reverse" : "xl:flex-row"
                        }`}
                    >
                        <img
                            className="w-full md:w-[50%] h-[450px] object-cover shadow-custom"
                            src={img}
                            alt=""
                        />
                        <div className="w-full md:w-[50%] p-[30px]">
                            <h3 className="text-[30px] sm:text-[35px] xl:text-[40px] font-bold uppercase text-main">
                                {title}
                            </h3>
                            <hr className="my-[10px] border-main border w-[20%]" />
                            <div className="text-dark text-[18px] xl:text-[22px]">
                                {text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyUsSection;
