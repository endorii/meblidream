import Container from "./Container";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../../store/slices/categories.slice";
import { useNavigate } from "react-router";

const Products = () => {
    const { categories } = useSelector((state) => state.categories);

    const dispatch = useDispatch();

    let navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <>
            <Container>
                <div className="flex items-center justify-between">
                    <h2 className="text-[70px] uppercase font-semibold text-darkblue tracking-[1px] my-[50px]">
                        Виготовлення меблевої продукції
                    </h2>
                    <hr className="w-[20%] border text-darkblue" />
                </div>
                <ul className="flex mt-[50px] justify-center gap-[25px] flex-wrap">
                    {categories.map((category, i) => {
                        return (
                            <li
                                key={i}
                                className="shadow-md w-[400px] border-b-4 border-white rounded-md hover:border-main hover:shadow-xl flex flex-col transition duration-300 ease-in-out"
                            >
                                <img
                                    className="w-full h-[250px] object-cover object-[0px_60%] rounded-t-md"
                                    // src={Wardrobe}
                                    src={category.images[0]}
                                    alt=""
                                />

                                <div className="p-[30px] flex flex-col gap-[30px] flex-grow">
                                    <div className="text-[26px] font-bold text-darkblue uppercase">
                                        {category.displayName}
                                    </div>
                                </div>
                                <div className="flex justify-between w-full px-[30px] pb-[30px]">
                                    <button
                                        className="w-[43%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out"
                                        onClick={() => {
                                            navigate(
                                                `/products/${category.pathName}`
                                            );
                                        }}
                                    >
                                        Переглянути
                                    </button>
                                    <button className="w-[55%] border border-main text-main font-semibold rounded-xl py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                        Замовити
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </>
    );
};

export default Products;
