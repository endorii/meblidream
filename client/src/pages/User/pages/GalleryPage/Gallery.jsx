import Container from "../WelcomePage/components/Container";
import GalleryBg from "../../../../assets/img/gallery/gallerybg.jpg";
import { useEffect, useState } from "react";
import TitleCentered from "../../../ui/TitleCentered";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../store/slices/categories.slice";

const Gallery = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.categories);
    const [currentCategory, setCurrentCategory] = useState(null);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        if (categories.length > 0) {
            setCurrentCategory(categories[0]);
        }
    }, [categories]);

    return (
        <div className="pt-[70px]">
            <div className="relative">
                <img
                    className="h-[100vh] w-full object-cover"
                    src={GalleryBg}
                    alt=""
                />
                <div className="absolute top-0 text-center w-full px-[50px] flex items-center justify-center h-full flex-col pb-[200px] gap-[20px]">
                    <h2 className="mt-[0px] lg:mt-[40px] text-center lg:text-right font-bold text-[60px] lg:text-[120px] leading-[70px] lg:leading-[140px] text-white">
                        Галерея робіт
                    </h2>
                    <hr className="border-white w-[20%]" />
                    <div className="text-[20px] lg:text-[24px] w-[90%] text-light font-[200]">
                        Це яскравий приклад того, як ми втілюємо ваші мрії у
                        реальність. Кожен проєкт унікальний, адже створений з
                        урахуванням індивідуальних потреб, стилю та простору
                        наших клієнтів.
                    </div>
                </div>
            </div>
            <Container>
                <div>
                    <div className="text-[30px] sm:text-[40px] font-[500] text-center font-semibold text-darkblue uppercase pt-[20px]">
                        Що бажаєте переглянути?
                    </div>
                    <ul className="flex flex-wrap flex-1 gap-[10px] justify-center p-[20px]">
                        {categories.map((category, i) => (
                            <li
                                key={i}
                                className={`py-[10px] sm:py-[13px] px-[20px] border rounded-xl text-[15px] sm:text-[16px] cursor-pointer
                        ${
                            currentCategory === category
                                ? "bg-mainbg text-white"
                                : "text-main hover:bg-mainbg hover:text-white"
                        }`}
                                onClick={() => {
                                    setCurrentCategory(category);
                                }}
                            >
                                {category.displayName}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col">
                    <div>
                        {currentCategory && (
                            <TitleCentered
                                title={currentCategory.displayName}
                            />
                        )}
                        {currentCategory?.images?.length > 0 ? (
                            <div
                                className="columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4"
                                style={{ columnGap: "20px" }}
                            >
                                {currentCategory.images.map((image, index) => (
                                    <img
                                        key={index}
                                        className="w-full h-auto rounded-lg shadow-custom break-inside-avoid"
                                        src={`http://localhost:5000${image}`}
                                        alt={`Image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-[34px] text-center">
                                Поки ще немає фотографій для цієї категорії, але
                                вони обов&apos;язково з&apos;являться!
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Gallery;
