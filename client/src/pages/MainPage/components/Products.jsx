import Container from "./Container";
import Wardrobe from "../../../assets/img/wardrobe.jpg";
import Garderob from "../../../assets/img/garderob.jpg";
import Kitchen from "../../../assets/img/kitchen.jpg";

const Products = () => {
    return (
        <>
            <Container>
                <div className="flex items-center justify-between">
                    <h2 className="text-[70px] uppercase font-semibold text-darkblue tracking-[1px] m-[50px]">
                        Виготовлення меблевої продукції
                    </h2>
                    <hr className="w-[20%] border text-darkblue" />
                </div>
                <ul className="flex my-[50px] justify-center gap-[40px] flex-wrap">
                    <li className="shadow-md w-[400px] border-b-4 border-white rounded-md hover:border-main hover:shadow-xl flex flex-col transition duration-300 ease-in-out">
                        <img
                            className="w-full h-[250px] object-cover object-[0px_60%] rounded-t-md"
                            src={Wardrobe}
                            alt=""
                        />

                        <div className="p-[30px] flex flex-col gap-[30px] flex-grow">
                            <div className="text-[26px] font-bold text-darkblue uppercase">
                                Шафи-купе
                            </div>

                            <ul className="ml-[15px] text-dark font-[300]">
                                <li>Шафи один</li>
                                <li>Шафи два три</li>
                                <li>Шафи три чотири</li>
                                <li>Шафи п&apos;ять</li>
                            </ul>
                        </div>
                        <div className="flex justify-between w-full px-[30px] pb-[30px]">
                            <button className="w-[43%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Переглянути
                            </button>
                            <button className="w-[55%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Замовити
                            </button>
                        </div>
                    </li>
                    <li className="shadow-md w-[400px] border-b-4 border-white rounded-md hover:border-main hover:shadow-xl flex flex-col transition duration-300 ease-in-out">
                        <img
                            className="w-full h-[250px] object-cover object-[0px_60%] rounded-t-md"
                            src={Garderob}
                            alt=""
                        />

                        <div className="p-[30px] flex flex-col gap-[30px] flex-grow">
                            <div className="text-[26px] font-semibold text-darkblue uppercase">
                                Гардеробні
                            </div>

                            <ul className="ml-[15px] text-dark font-[300]">
                                <li>Шафи один</li>
                                <li>Шафи два три</li>
                                <li>Шафи п&apos;ять</li>
                            </ul>
                        </div>
                        <div className="flex justify-between w-full px-[30px] pb-[30px]">
                            <button className="w-[43%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Переглянути
                            </button>
                            <button className="w-[55%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Замовити
                            </button>
                        </div>
                    </li>
                    <li className="shadow-md w-[400px] border-b-4 border-white rounded-md hover:border-main hover:shadow-xl flex flex-col transition duration-300 ease-in-out">
                        <img
                            className="w-full h-[250px] object-cover object-[0px_60%] rounded-t-md"
                            src={Kitchen}
                            alt=""
                        />

                        <div className="p-[30px] flex flex-col gap-[30px] flex-grow">
                            <div className="text-[26px] font-semibold text-darkblue uppercase">
                                Кухні
                            </div>

                            <ul className="ml-[15px] text-dark font-[300]">
                                <li>Шафи п&apos;ять</li>
                            </ul>
                        </div>
                        <div className="flex justify-between w-full px-[30px] pb-[30px]">
                            <button className="w-[43%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Переглянути
                            </button>
                            <button className="w-[55%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Замовити
                            </button>
                        </div>
                    </li>
                    <li className="shadow-md w-[400px] border-b-4 border-white rounded-md hover:border-main hover:shadow-xl flex flex-col transition duration-300 ease-in-out">
                        <img
                            className="w-full h-[250px] object-cover object-[0px_60%] rounded-t-md"
                            src={Wardrobe}
                            alt=""
                        />

                        <div className="p-[30px] flex flex-col gap-[30px] flex-grow">
                            <div className="text-[26px] font-semibold text-darkblue uppercase">
                                Шафи-купе
                            </div>

                            <ul className="ml-[15px] text-dark font-[300]">
                                <li>Шафи один</li>
                                <li>Шафи два три</li>
                                <li>Шафи три чотири</li>
                                <li>Шафи п&apos;ять</li>
                            </ul>
                        </div>
                        <div className="flex justify-between w-full px-[30px] pb-[30px]">
                            <button className="w-[43%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Переглянути
                            </button>
                            <button className="w-[55%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Замовити
                            </button>
                        </div>
                    </li>
                    <li className="shadow-md w-[400px] border-b-4 border-white rounded-md hover:border-main hover:shadow-xl flex flex-col transition duration-300 ease-in-out">
                        <img
                            className="w-full h-[250px] object-cover object-[0px_60%] rounded-t-md"
                            src={Garderob}
                            alt=""
                        />

                        <div className="p-[30px] flex flex-col gap-[30px] flex-grow">
                            <div className="text-[26px] font-semibold text-darkblue uppercase">
                                Гардеробні
                            </div>

                            <ul className="ml-[15px] text-dark font-[300]">
                                <li>Шафи один</li>
                                <li>Шафи два три</li>
                                <li>Шафи п&apos;ять</li>
                            </ul>
                        </div>
                        <div className="flex justify-between w-full px-[30px] pb-[30px]">
                            <button className="w-[43%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Переглянути
                            </button>
                            <button className="w-[55%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Замовити
                            </button>
                        </div>
                    </li>
                    <li className="shadow-md w-[400px] border-b-4 border-white rounded-md hover:border-main hover:shadow-xl flex flex-col transition duration-300 ease-in-out">
                        <img
                            className="w-full h-[250px] object-cover object-[0px_60%] rounded-t-md"
                            src={Kitchen}
                            alt=""
                        />

                        <div className="p-[30px] flex flex-col gap-[30px] flex-grow">
                            <div className="text-[26px] font-semibold text-darkblue uppercase">
                                Кухні
                            </div>

                            <ul className="ml-[15px] text-dark font-[300]">
                                <li>Шафи п&apos;ять</li>
                            </ul>
                        </div>
                        <div className="flex justify-between w-full px-[30px] pb-[30px]">
                            <button className="w-[43%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Переглянути
                            </button>
                            <button className="w-[55%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Замовити
                            </button>
                        </div>
                    </li>
                    <li className="shadow-md w-[400px] border-b-4 border-white rounded-md hover:border-main hover:shadow-xl flex flex-col transition duration-300 ease-in-out">
                        <img
                            className="w-full h-[250px] object-cover object-[0px_60%] rounded-t-md"
                            src={Garderob}
                            alt=""
                        />

                        <div className="p-[30px] flex flex-col gap-[30px] flex-grow">
                            <div className="text-[26px] font-semibold text-darkblue uppercase">
                                Гардеробні
                            </div>

                            <ul className="ml-[15px] text-dark font-[300]">
                                <li>Шафи один</li>
                                <li>Шафи два три</li>
                                <li>Шафи п&apos;ять</li>
                            </ul>
                        </div>
                        <div className="flex justify-between w-full px-[30px] pb-[30px]">
                            <button className="w-[43%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Переглянути
                            </button>
                            <button className="w-[55%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Замовити
                            </button>
                        </div>
                    </li>
                    <li className="shadow-md w-[400px] border-b-4 border-white rounded-md hover:border-main hover:shadow-xl flex flex-col transition duration-300 ease-in-out">
                        <img
                            className="w-full h-[250px] object-cover object-[0px_60%] rounded-t-md"
                            src={Kitchen}
                            alt=""
                        />

                        <div className="p-[30px] flex flex-col gap-[30px] flex-grow">
                            <div className="text-[26px] font-semibold text-darkblue uppercase">
                                Кухні
                            </div>

                            <ul className="ml-[15px] text-dark font-[300]">
                                <li>Шафи п&apos;ять</li>
                            </ul>
                        </div>
                        <div className="flex justify-between w-full px-[30px] pb-[30px]">
                            <button className="w-[43%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Переглянути
                            </button>
                            <button className="w-[55%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                Замовити
                            </button>
                        </div>
                    </li>
                </ul>
            </Container>
        </>
    );
};

export default Products;
