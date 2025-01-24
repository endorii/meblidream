import Container from "./Container";

import Adv1 from "../../../assets/img/adv1.jpg";
import Adv2 from "../../../assets/img/adv2.jpg";
import Adv3 from "../../../assets/img/adv3.jpg";

const Advantages = () => {
    return (
        <div>
            <Container>
                <div className="flex items-center justify-between py-[50px]">
                    <h2 className="text-[70px] uppercase font-semibold text-darkblue tracking-[1px] mx-[50px]">
                        Чому варто обрати нас?
                    </h2>
                    <hr className="w-[40%] border text-darkblue" />
                </div>
                <div className="mt-[50px] flex flex-col gap-[15px]">
                    <div className="flex items-center gap-[100px]">
                        <div className="w-[50%] p-[30px]">
                            <div className="text-[45px] font-semibold text-darkblue leading-[50px] mb-[25px]">
                                Виготовляємо меблі під замовлення протягом 15-ти
                                років!
                            </div>
                            <div className="text-dark text-[20px] font-[300]">
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
                            <div className="text-[45px] font-semibold text-darkblue leading-[50px] mb-[25px]">
                                Більше 5-ти тисяч задоволених клієнтів!
                            </div>
                            <div className="text-dark text-[20px] font-[300]">
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
                            <div className="text-[45px] font-semibold text-darkblue leading-[50px] mb-[25px]">
                                Якісно та швидко!
                            </div>
                            <div className="text-dark text-[20px] font-[300]">
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
