import TrashIcon from "../../../../assets/svg/trash.svg?react";
import EditIcon from "../../../../assets/svg/edit.svg?react";
import ViewIcon from "../../../../assets/svg/view.svg?react";
import PlusIcon from "../../../../assets/svg/plus.svg?react";
import EditImageIcon from "../../../../assets/svg/image.svg?react";

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
import { deleteCategory } from "../../../../actions/categories.actions";
import { AnimatePresence, motion } from "motion/react";
import CategoryImagesModal from "../../../Modals/Categories/CategoryImagesModal";

const Categories = () => {
    const { categories } = useSelector((state) => state.categories);

    const dispatch = useDispatch();

    const [currentCategory, setCurrentCategory] = useState(null);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isCategoryImagesModalOpen, setIsCategoryImagesModalOpen] =
        useState(false);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

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
                        <PlusIcon className="w-[25px] stroke-white group-hover:stroke-main transition-colors duration-300" />
                    </MainButton>
                </div>
            </div>
            <hr className="border border-gray my-[30px] md:my-[0px]" />
            <div className="mt-[30px]">
                <ul className="flex flex-wrap gap-[30px]">
                    {categories.length > 0 ? (
                        categories.map((category, i) => {
                            const createdAt = new Date(category.updatedAt);
                            const day = createdAt
                                .getDate()
                                .toString()
                                .padStart(2, "0");
                            const month = (createdAt.getMonth() + 1)
                                .toString()
                                .padStart(2, "0");
                            const year = createdAt.getFullYear();
                            const hours = createdAt
                                .getHours()
                                .toString()
                                .padStart(2, "0");
                            const minutes = createdAt
                                .getMinutes()
                                .toString()
                                .padStart(2, "0");
                            const seconds = createdAt
                                .getSeconds()
                                .toString()
                                .padStart(2, "0");

                            const formattedDate = `${day}/${month}/${year} / ${hours}:${minutes}:${seconds}`;

                            return (
                                <li
                                    key={i}
                                    className="shadow-custom rounded-xl flex flex-col basis-[48%] flex-1"
                                >
                                    <div className="text-white font-bold bg-mainbg rounded-t-md h-[50px] text-center p-[10px] flex justify-center items-center">
                                        №<span>{i + 1}</span>
                                    </div>

                                    <div className="flex flex-col justify-between bg-white py-[30px] px-[10px] md:px-[30px] w-full">
                                        <div className="flex flex-col gap-[10px]">
                                            <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                                <div className="text-[12px] md:text-[15px] w-[25%]">
                                                    Відображувана назва
                                                    категорії:
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
                                                    {" " +
                                                        category.filling.title}
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                                <div className="text-[12px] md:text-[15px] w-[25%]">
                                                    Підзаголовок:
                                                </div>
                                                <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                    {" " +
                                                        category.filling
                                                            .subtitle}
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
                                                    {" " +
                                                        category.images.length}
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                                <div className="text-[12px] md:text-[15px] w-[25%]">
                                                    Востаннє редаговано
                                                </div>
                                                <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                    {formattedDate}
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
                                            <EditIcon className="stroke-main w-[27px]" />
                                        </button>
                                        <button
                                            className="h-full hover:bg-main/5 w-full flex justify-center items-center rounded-xl"
                                            onClick={() => {
                                                setCurrentCategory(category);
                                                setIsCategoryImagesModalOpen(
                                                    true
                                                );
                                            }}
                                        >
                                            <EditImageIcon className="stroke-main w-[32px]" />
                                        </button>
                                        <button
                                            className="h-full hover:bg-main/5 w-full flex justify-center items-center rounded-xl"
                                            onClick={() => {
                                                setCurrentCategory(category);
                                                setIsPreviewModalOpen(true);
                                            }}
                                        >
                                            <ViewIcon className="fill-main w-[27px]" />
                                        </button>
                                        <button
                                            className="h-full hover:bg-main/5 w-full flex justify-center items-center rounded-xl"
                                            onClick={() => {
                                                setCurrentCategory(category);
                                                setIsDeleteModalOpen(true);
                                            }}
                                        >
                                            <TrashIcon className="stroke-main w-[27px]" />
                                        </button>
                                    </div>
                                </li>
                            );
                        })
                    ) : (
                        <div className="text-darkgray">Нічого не знайдено</div>
                    )}
                </ul>
            </div>
            <AnimatePresence mode="wait">
                {isDeleteModalOpen ? (
                    <Modal
                        onClose={() => {
                            setIsDeleteModalOpen(false);
                            setCurrentCategory(null);
                        }}
                    >
                        <motion.div
                            key="order-modal"
                            initial={{ scale: 0.4, x: "-100vw" }}
                            animate={{ scale: 1, x: 0 }}
                            exit={{ scale: 0.4, x: "-100vw" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <DeleteModalContent
                                title={`категорію ${currentCategory.displayName}`}
                                onClose={() => {
                                    setIsDeleteModalOpen(false);
                                    setCurrentCategory(null);
                                }}
                                onAction={async () => {
                                    setIsDeleteModalOpen(false);
                                    await deleteCategory(currentCategory._id);
                                    dispatch(fetchCategories());
                                }}
                            />
                        </motion.div>
                    </Modal>
                ) : null}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {isEditModalOpen ? (
                    <Modal
                        onClose={() => {
                            setIsEditModalOpen(false);
                            setCurrentCategory(null);
                        }}
                    >
                        <motion.div
                            key="order-modal"
                            initial={{ scale: 0.4, x: "-100vw" }}
                            animate={{ scale: 1, x: 0 }}
                            exit={{ scale: 0.4, x: "-100vw" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <EditCategoryModalContent
                                currentCategory={currentCategory}
                                onClose={() => {
                                    setIsEditModalOpen(false);
                                    setCurrentCategory(null);
                                }}
                            />
                        </motion.div>
                    </Modal>
                ) : null}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {isPreviewModalOpen ? (
                    <Modal
                        onClose={() => {
                            setIsPreviewModalOpen(false);
                            setCurrentCategory(null);
                        }}
                    >
                        <motion.div
                            key="order-modal"
                            initial={{ scale: 0.4, x: "-100vw" }}
                            animate={{ scale: 1, x: 0 }}
                            exit={{ scale: 0.4, x: "-100vw" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <PreviewCategoryModalContent
                                currentCategory={currentCategory}
                                onClose={() => {
                                    setIsPreviewModalOpen(false);
                                    setCurrentCategory(null);
                                }}
                            />
                        </motion.div>
                    </Modal>
                ) : null}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {isAddModalOpen ? (
                    <Modal
                        onClose={() => {
                            setIsAddModalOpen(false);
                            setCurrentCategory(null);
                        }}
                    >
                        <motion.div
                            key="order-modal"
                            initial={{ scale: 0.4, x: "-100vw" }}
                            animate={{ scale: 1, x: 0 }}
                            exit={{ scale: 0.4, x: "-100vw" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <AddCategoryModalContent
                                onClose={() => {
                                    setIsAddModalOpen(false);
                                    setCurrentCategory(null);
                                }}
                            />
                        </motion.div>
                    </Modal>
                ) : null}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {isCategoryImagesModalOpen ? (
                    <Modal
                        onClose={() => {
                            setIsCategoryImagesModalOpen(false);
                            setCurrentCategory(null);
                        }}
                    >
                        <motion.div
                            key="category-images-modal"
                            initial={{ scale: 0.4, x: "-100vw" }}
                            animate={{ scale: 1, x: 0 }}
                            exit={{ scale: 0.4, x: "-100vw" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <CategoryImagesModal
                                currentCategory={currentCategory}
                                setCurrentCategory={setCurrentCategory}
                                onClose={() => {
                                    setIsCategoryImagesModalOpen(false);
                                    setCurrentCategory(null);
                                }}
                            />
                        </motion.div>
                    </Modal>
                ) : null}
            </AnimatePresence>
        </div>
    );
};

export default Categories;
