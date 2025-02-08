import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../../store/slices/categories.slice";

import Container from "../../WelcomePage/components/Container";

const ProductsItem = () => {
    const { categoryName } = useParams();
    const { categories } = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const category = categories.find(
        (category) => category.pathName === categoryName
    );

    if (!category) {
        return <div className="py-[80px]">Категорію не знайдено :(</div>;
    }

    return (
        <div className="py-[80px]">
            <div className="relative">
                <img
                    className="w-[100vw] h-[40vh] object-cover"
                    src="https://colorit-mebel.od.ua/wp-content/uploads/2023/06/kuhni-na-zakaz-odessakuhnya-v-sovremennom-stile-1.jpg"
                    alt=""
                />
                <div className="absolute top-0 text-center w-full p-[50px] flex items-center justify-center h-full flex-col gap-[20px]">
                    <div className="text-[100px] font-[500] leading-[100px] text-white uppercase">
                        {category.displayName}
                    </div>
                </div>
            </div>
            <Container>
                <div className="flex flex-col">
                    <div className="text-center w-full p-[50px] flex items-center justify-center h-full flex-col gap-[20px]">
                        <div className="text-[50px] font-[500] leading-[100px] text-darkblue uppercase">
                            {category.filling.title}
                        </div>
                        <hr className="border-darkblue w-[15%]" />
                        <div className="text-[24px] w-[70%] text-darkgray font-[200]">
                            {category.filling.subtitle}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div
                            className="columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4"
                            style={{ columnGap: "20px" }}
                        >
                            {category.images.map((image, index) => (
                                <img
                                    key={index}
                                    className="w-full h-auto rounded-lg shadow-custom break-inside-avoid"
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="text-[26px] p-[100px] text-darkblue font-[300] text-center">
                        {category.filling.description}
                    </div>
                    <button className="border border-main w-[30%] m-[0_auto] text-[24px] text-main font-semibold rounded-xl px-[40px] py-[20px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                        Залишити заявку
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default ProductsItem;
