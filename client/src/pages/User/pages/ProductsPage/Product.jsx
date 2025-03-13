import Container from "../WelcomePage/components/Container";
import Products from "../WelcomePage/components/Products";
import Product1 from "../../../../assets/img/product/product1.jpg";
import Product2 from "../../../../assets/img/product/product2.jpg";
import Product3 from "../../../../assets/img/product/product3.jpg";

import Arowdown from "../../../../assets/svg/arrowdown.svg";
import { useSelector } from "react-redux";

const Product = () => {
    const { categories } = useSelector((state) => state.categories);

    return (
        <div className="pt-[70px]">
            <Container>
                <div className="flex justify-center text-center lg:text-left lg:justify-between gap-[30px]">
                    <div className="flex flex-col justify-between pt-[20px] w-[55%] items-center lg:items-start">
                        <div>
                            <h2 className="text-4xl lg:text-5xl xl:text-[65px] uppercase font-bold leading-tight">
                                Виготовляємо будь-яку меблеву продукцію
                            </h2>
                            <div className="text-[18px] mt-[30px] text-darkgray">
                                Пропонуємо виготовлення меблів на замовлення за
                                вашими індивідуальними розмірами та дизайном.
                                Створюємо унікальні рішення для дому та офісу,
                                враховуючи всі ваші побажання. Гарантуємо
                                якість, стиль і функціональність кожного виробу!
                            </div>
                        </div>
                        <img
                            className="w-[100px] sm:w-[120px] lg:w-[150px] animate-bounce mt-[50px]"
                            src={Arowdown}
                            alt="Arrow down"
                        />
                    </div>
                    <div className="flex w-[70%] gap-[15px] hidden lg:flex">
                        <img
                            className="w-[45%] object-cover shadow-custom"
                            src={Product2}
                            alt=""
                        />
                        <div className=" flex flex-col gap-[15px] h-full">
                            <img
                                className="h-1/2 object-cover shadow-custom"
                                src={Product3}
                                alt=""
                            />
                            <img
                                className="h-1/2 object-cover shadow-custom"
                                src={Product1}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </Container>
            {categories.length > 0 ? <Products /> : null}
        </div>
    );
};

export default Product;
