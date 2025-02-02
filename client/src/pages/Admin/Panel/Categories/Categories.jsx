import Trash from "../../../../assets/svg/trash.svg";
import Edit from "../../../../assets/svg/edit.svg";
import View from "../../../../assets/svg/view.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../../../store/slices/categories.slice";
import PlusBlue from "../../../../assets/svg/plus-blue.svg";
import Modal from "../../../Modals/Modal";
import DeleteCategoryModalContent from "../../../Modals/Categories/DeleteCategoryModalContent";
import EditCategoryModalContent from "../../../Modals/Categories/EditCategoryModalContent";
import PreviewCategoryModalContent from "../../../Modals/Categories/PreviewCategoryModalContent";

const Categories = () => {
    const { categories } = useSelector((state) => state.categories);

    const dispatch = useDispatch();

    const [currentCategory, setCurrentCategory] = useState(null);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <div className="overflow-y-auto">
            <div className="py-[15px] flex justify-between">
                <div className="text-[50px] text-main uppercase font-[500]">
                    Дії з категоріями
                </div>
                <div className="flex items-center gap-[10px]">
                    <button className="border border-main flex gap-[10px] items-center text-main font-semibold rounded-xl px-[20px] py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                        Додати категорію
                        <img className="w-[25px]" src={PlusBlue} />
                    </button>
                </div>
            </div>
            <hr className="border border-gray" />
            <div className="mt-[30px]">
                <ul className="flex flex-col gap-[30px] p-[20px]">
                    {categories.map((category, i) => {
                        return (
                            <li key={i} className="shadow-md rounded-xl flex">
                                <div className="text-white font-bold w-[5%] bg-main rounded-l-xl text-center flex justify-center items-center">
                                    №<span>{i}</span>
                                </div>

                                <div className="flex justify-between items-center py-[30px] px-[50px] w-full">
                                    <div className="w-[80%]">
                                        <div className="text-[16px]">
                                            Відображувана назва категорії:
                                            <span className="text-main font-bold text-[20px]">
                                                {category.displayName}
                                            </span>
                                        </div>
                                        <div className="text-[16px]">
                                            Назва посилання/шляху до категорії:
                                            <span className="text-main font-bold text-[20px]">
                                                {category.pathName}
                                            </span>
                                        </div>
                                        <div className="text-[16px]">
                                            Заголовок: <br />
                                            <span className="text-main font-bold text-[20px]">
                                                {category.filling.title}
                                            </span>
                                        </div>
                                        <div className="text-[16px]">
                                            Підзаголовок: <br />
                                            <span className="text-main font-bold text-[20px]">
                                                {category.filling.subtitle}
                                            </span>
                                        </div>
                                        <div className="text-[16px]">
                                            Опис: <br />
                                            <span className="text-main font-bold text-[20px]">
                                                {category.filling.description}
                                            </span>
                                        </div>
                                        <div className="text-[16px]">
                                            Кількість світлин: <br />
                                            <span className="text-main font-bold text-[20px]">
                                                {category.images.length}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-[2px]">
                                        <button
                                            className="p-[10px] hover:bg-main/10 rounded-md"
                                            onClick={() => {
                                                setCurrentCategory(category);
                                                setIsEditModalOpen(true);
                                            }}
                                        >
                                            <img
                                                className="w-[30px]"
                                                src={Edit}
                                                alt=""
                                            />
                                        </button>
                                        <button
                                            className="p-[10px] hover:bg-main/10 rounded-md"
                                            onClick={() => {
                                                setCurrentCategory(category);
                                                setIsPreviewModalOpen(true);
                                            }}
                                        >
                                            <img
                                                className="w-[30px]"
                                                src={View}
                                                alt=""
                                            />
                                        </button>
                                        <button
                                            className="p-[10px] hover:bg-main/10 rounded-md"
                                            onClick={() =>
                                                setIsDeleteModalOpen(true)
                                            }
                                        >
                                            <img
                                                className="w-[30px]"
                                                src={Trash}
                                                alt=""
                                            />
                                        </button>
                                    </div>
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
                <DeleteCategoryModalContent
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
        </div>
    );
};

export default Categories;
