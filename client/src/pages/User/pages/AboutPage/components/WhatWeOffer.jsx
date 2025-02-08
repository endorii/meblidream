import About1 from "../../../../../assets/img/about/about1.jpg";
import Why1 from "../../../../../assets/img/about/why1.jpg";
import Why2 from "../../../../../assets/img/about/why2.jpg";
import TitleCentered from "../../../../ui/TitleCentered";

const offerData = [
    {
        title: "Меблі для дому:",
        text: "кухні, вітальні, спальні, дитячі кімнати.",
        images: [About1, Why1, Why2],
    },
    {
        title: "Офісні меблі:",
        text: "столи, шафи, полиці та інші елементи для комфортної роботи.",
        images: [Why1, Why2, About1],
    },
    {
        title: "Комерційні меблі:",
        text: "кафе, ресторанів, магазинів та інших комерційних приміщень.",
        images: [Why2, About1, Why1],
    },
    {
        title: "Інші види меблів:",
        text: "декоративні та функціональні рішення для вашого інтер'єру.",
        images: [About1, Why1, Why2],
    },
];

const WhatWeOffer = () => {
    return (
        <div>
            <TitleCentered title={"Що ми пропонуємо?"} />
            <div className="flex flex-wrap justify-center gap-[30px] mt-[20px]">
                {offerData.map(({ title, text, images }, index) => (
                    <div key={index} className="w-[20%] min-w-[250px]">
                        <div className="h-[150px] text-center">
                            <div className="text-main font-bold leading-[40px] text-3xl">
                                {title}
                            </div>
                            <div className="text-darkgray m-2">{text}</div>
                        </div>
                        <div className="flex flex-col gap-4">
                            {images.map((src, imgIndex) => (
                                <img
                                    className="shadow-custom"
                                    key={imgIndex}
                                    src={src}
                                    alt=""
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatWeOffer;
