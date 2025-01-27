import Container from "./Container";

import Adv1 from "../../../../../assets/img/adv1.jpg";
import Adv2 from "../../../../../assets/img/adv2.jpg";
import Adv3 from "../../../../../assets/img/adv3.jpg";

const Advantages = () => {
    return (
        <div>
            <Container>
                <div className="flex items-center justify-between py-[50px]">
                    <h2 className="text-[70px] uppercase font-semibold text-darkblue tracking-[1px] my-[50px]">
                        Чому варто обрати нас?
                    </h2>
                    <hr className="w-[40%] border text-darkblue" />
                </div>
                <div className="mt-[50px] flex flex-col gap-[15px]">
                    <div className="flex items-center gap-[100px]">
                        <div className="w-[50%] p-[30px]">
                            <div className="text-[40px] font-bold uppercase text-main">
                                Виготовляємо меблі під замовлення понад 15-ть
                                років!
                            </div>
                            <hr className="my-[10px] border-main border w-[20%]" />
                            <div className="text-dark text-[22px]">
                                Ми маємо багаторічний досвід у виробництві
                                меблів, що дозволяє нам створювати продукти
                                найвищої якості. Завдяки 15-річному стажу, ми
                                точно знаємо, як реалізувати навіть найскладніші
                                ідеї наших клієнтів, забезпечуючи надійність,
                                довговічність і стиль у кожному виробі.
                            </div>
                        </div>
                        <img
                            className="w-[50%] h-[450px] object-cover"
                            src={Adv1}
                            alt=""
                        />
                    </div>
                    <div className="flex items-center gap-[100px]">
                        <img
                            className="w-[50%] h-[450px] object-cover"
                            src={Adv2}
                            alt=""
                        />
                        <div className="w-[50%] p-[30px]">
                            <div className="text-[40px] font-bold uppercase text-main">
                                Більше 5-ти тисяч задоволених клієнтів!
                            </div>
                            <hr className="my-[10px] border-main border w-[20%]" />
                            <div className="text-dark text-[22px]">
                                Нам довіряють тисячі людей, і кожен клієнт для
                                нас — це можливість перевершити очікування. Ми
                                пишаємося тим, що наша репутація ґрунтується на
                                вдячних відгуках і довірі, які ми заслужили
                                завдяки індивідуальному підходу, професіоналізму
                                та високим стандартам обслуговування.
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[100px]">
                        <div className="w-[50%] p-[30px]">
                            <div className="text-[40px] font-bold uppercase text-main">
                                Якісно та швидко!
                            </div>
                            <hr className="my-[10px] border-main border w-[20%]" />
                            <div className="text-dark text-[22px]">
                                Ми розуміємо, наскільки важливими є терміни
                                виконання замовлення, тому оптимізуємо всі
                                процеси, не жертвуючи якістю. Використовуючи
                                сучасні матеріали та передові технології, ми
                                гарантуємо, що кожен наш виріб відповідатиме
                                вашим очікуванням та буде готовий у домовлені
                                строки.
                            </div>
                        </div>
                        <img
                            className="w-[50%] h-[450px] object-cover"
                            src={Adv3}
                            alt=""
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Advantages;
