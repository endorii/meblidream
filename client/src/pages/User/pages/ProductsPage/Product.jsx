import Container from "../WelcomePage/components/Container";
import Products from "../WelcomePage/components/Products";
import Product1 from "../../../../assets/img/product/product1.jpg";
import Product2 from "../../../../assets/img/product/product2.jpg";
import Product3 from "../../../../assets/img/product/product3.jpg";

import Arowdown from "../../../../assets/svg/arrowdown.svg";

const Product = () => {
    return (
        <div>
            <Container>
                <div className="flex justify-between gap-[30px] pt-[80px] w-full">
                    <div className="flex flex-col pt-[50px] w-[70%] items-left justify-between">
                        <div>
                            <div className="text-[70px] font-[500] leading-[70px] ">
                                Виготовляємо будь-яку меблеву продукцію
                            </div>
                            <div className="text-[20px] mt-[30px] text-darkgray">
                                Пропонуємо виготовлення меблів на замовлення за
                                вашими індивідуальними розмірами та дизайном.
                                <br />
                                Створюємо унікальні рішення для дому та офісу,
                                враховуючи всі ваші побажання. Гарантуємо
                                якість, стиль і функціональність кожного виробу!
                            </div>
                        </div>
                        <img
                            className="w-[210px] animate-[bounce_2s_ease-in-out_infinite]"
                            src={Arowdown}
                            alt=""
                        />
                    </div>
                    <div className="flex w-[70%] gap-[15px]">
                        <img
                            className="w-[45%] object-cover"
                            src={Product2}
                            alt=""
                        />
                        <div className=" flex flex-col gap-[15px] h-full">
                            <img
                                className="h-1/2 object-cover"
                                src={Product3}
                                alt=""
                            />
                            <img
                                className="h-1/2 object-cover"
                                src={Product1}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <Products />
        </div>
    );
};

export default Product;
