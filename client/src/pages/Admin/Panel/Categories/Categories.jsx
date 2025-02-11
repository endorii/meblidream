import Trash from "../../../../assets/svg/trash.svg?react";
import Edit from "../../../../assets/svg/edit.svg?react";
import View from "../../../../assets/svg/view.svg?react";
import Plus from "../../../../assets/svg/plus.svg?react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../../../store/slices/categories.slice";

import Modal from "../../../Modals/Modal";
import DeleteModalContent from "../../../Modals/Categories/DeleteModalContent";
import EditCategoryModalContent from "../../../Modals/Categories/EditCategoryModalContent";
import PreviewCategoryModalContent from "../../../Modals/Categories/PreviewCategoryModalContent";
import MainButton from "../../../ui/buttons/MainButton";
import AddCategoryModalContent from "../../../Modals/Categories/AddCategoryModalContant";
import ScrollToTop from "../../../ui/ScrollToTop/ScrollToTop";

const Categories = () => {
    const { categories } = useSelector((state) => state.categories);

    const dispatch = useDispatch();

    const [currentCategory, setCurrentCategory] = useState(null);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <div>
            <ScrollToTop />
            <div className="md:py-[30px] flex flex-col gap-[20px] md:flex-row justify-between">
                <div className="text-[30px] text-darkblue font-bold">
                    Дії з категоріями
                </div>
                <div className="flex items-center gap-[10px]">
                    <MainButton
                        bonusStyles="flex gap-[10px] items-center w-full justify-center"
                        onClick={() => {
                            setIsAddModalOpen(true);
                        }}
                    >
                        Додати категорію
                        <Plus className="w-[25px] stroke-white group-hover:stroke-main transition-colors duration-300" />
                    </MainButton>
                </div>
            </div>
            <hr className="border border-gray my-[30px] md:my-[0px]" />
            <div className="mt-[30px]">
                <ul className="flex flex-wrap gap-[30px]">
                    {categories.map((category, i) => {
                        return (
                            <li
                                key={i}
                                className="shadow-custom rounded-xl flex flex-col basis-[45%] flex-1"
                            >
                                <div className="text-white font-bold bg-main rounded-t-md text-center p-[10px] flex justify-center items-center">
                                    №<span>{i + 1}</span>
                                </div>

                                <div className="flex flex-col justify-between items-center bg-white py-[30px] px-[10px] md:px-[30px] w-full">
                                    <div className="flex flex-col gap-[10px]">
                                        <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                            <div className="text-[12px] md:text-[15px] w-[25%]">
                                                Відображувана назва категорії:
                                            </div>
                                            <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                {" " + category.displayName}
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                            <div className="text-[12px] md:text-[15px] w-[25%]">
                                                Назва посилання/шляху до
                                                категорії:
                                            </div>
                                            <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                {" /" + category.pathName}
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                            <div className="text-[12px] md:text-[15px] w-[25%]">
                                                Заголовок:
                                            </div>
                                            <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                {" " + category.filling.title}
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                            <div className="text-[12px] md:text-[15px] w-[25%]">
                                                Підзаголовок:
                                            </div>
                                            <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                {" " +
                                                    category.filling.subtitle}
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                            <div className="text-[12px] md:text-[15px] w-[25%]">
                                                Опис:
                                            </div>
                                            <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                {" " +
                                                    category.filling
                                                        .description}
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                            <div className="text-[12px] md:text-[15px] w-[25%]">
                                                Кількість світлин:
                                            </div>
                                            <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                {" " + category.images.length}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-gray border-dashed" />
                                <div className="flex justify-around items-center w-full h-[50px] md:h-[70px] mt-auto rounded-b-md">
                                    <button
                                        className="h-full hover:bg-main/5 w-full flex justify-center items-center rounded-xl"
                                        onClick={() => {
                                            setCurrentCategory(category);
                                            setIsEditModalOpen(true);
                                        }}
                                    >
                                        <Edit className="stroke-main w-[27px]" />
                                    </button>
                                    <button
                                        className="h-full hover:bg-main/5 w-full flex justify-center items-center rounded-xl"
                                        onClick={() => {
                                            setCurrentCategory(category);
                                            setIsPreviewModalOpen(true);
                                        }}
                                    >
                                        <View className="fill-main w-[27px]" />
                                    </button>
                                    <button
                                        className="h-full hover:bg-main/5 w-full flex justify-center items-center rounded-xl"
                                        onClick={() =>
                                            setIsDeleteModalOpen(true)
                                        }
                                    >
                                        <Trash className="stroke-main w-[27px]" />
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
            >
                <DeleteModalContent
                    title={"цю категорію"}
                    onClose={() => setIsDeleteModalOpen(false)}
                />
            </Modal>
            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
            >
                <EditCategoryModalContent
                    currentCategory={currentCategory}
                    onClose={() => setIsEditModalOpen(false)}
                />
            </Modal>
            <Modal
                isOpen={isPreviewModalOpen}
                onClose={() => setIsPreviewModalOpen(false)}
            >
                <PreviewCategoryModalContent
                    currentCategory={currentCategory}
                    onClose={() => setIsPreviewModalOpen(false)}
                />
            </Modal>
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            >
                <AddCategoryModalContent
                    onClose={() => setIsAddModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default Categories;
