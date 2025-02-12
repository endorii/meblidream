import Container from "./Container";
import Title from "../../../../ui/Title";

const ProcessCard = ({ title, description, value }) => {
    return (
        <div className="relative text-white z-[10] bg-white p-[30px] md:p-[50px] shadow-custom rounded-xl flex flex-col flex-1 basis-[30%] gap-[10px] border hover:border-main/40 transition duration-300 ease-in-out">
            <div className="text-[22px] pr-[50px] sm:text-[24px] xl:text-[28px] font-bold text-main leading-[26px]">
                {title}
            </div>
            <div className="mt-[10px] text-[16px] sm:text-[20px] leading-[24px] xl:text-[20px] text-dark">
                {description}
            </div>
            <div className="absolute text-white p-[20px] top-0 right-[5%] bg-mainbg rounded-b-xl font-bold">
                {value + 1}
            </div>
        </div>
    );
};

const Process = () => {
    const processSteps = [
        {
            title: "Відправка заявки",
            description:
                "Залиште заявку на зворотній дзвінок або зателефонуєте нам самі",
        },
        {
            title: "Замір",
            description: "Проводимо заміри і готуємо дизайн проект меблів.",
        },
        {
            title: "Розрахунок вартості",
            description:
                "Після узгодження дизайна, матеріалів та розмірів, робимо розрахунок вартості.",
        },
        {
            title: "Виготовлення меблів",
            description: "Виготовляємо меблі на власному виробництві в Луцьку.",
        },
        { title: "Доставка", description: "Доставляємо меблі до Вас." },
        { title: "Монтаж", description: "Монтуємо меблі у Вашому помешканні." },
    ];

    return (
        <div className="">
            <Container>
                <Title title={"Як проходить процес"} />
            </Container>
            <div className="flex gap-[20px] flex-wrap p-[20px]">
                {processSteps.map((step, index) => (
                    <ProcessCard
                        key={index}
                        title={step.title}
                        description={step.description}
                        value={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Process;
