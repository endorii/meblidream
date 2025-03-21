import { useEffect, useState } from "react";
import GlassIcon from "../../../../../assets/svg/glass.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../../store/slices/categories.slice";
import { Link } from "react-router";
import MainButton from "../../../../ui/buttons/MainButton";
import SecondaryButton from "../../../../ui/buttons/SecondaryButton";
import Title from "../../../../ui/Title";
import Container from "./Container";
import Modal from "../../../../Modals/Modal";
import OrdersModalContent from "../../../../Modals/Orders/OrdersModalContent";
import { AnimatePresence, motion } from "motion/react";

const Products = () => {
    const { categories } = useSelector((state) => state.categories);

    const dispatch = useDispatch();

    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <>
            <Container>
                <Title title={"Виготовлення меблевої продукції"} />
                <ul className="flex mt-[25px] justify-center gap-[25px] flex-wrap">
                    {categories.map((category, i) => {
                        return (
                            <li
                                key={i}
                                className="shadow-custom w-[400px] border-b-4 border-white rounded-md hover:border-main hover:shadow-custom flex flex-col transition duration-300 ease-in-out"
                            >
                                <img
                                    className="w-full h-[250px] object-cover object-[0px_60%] rounded-t-md"
                                    src={`${import.meta.env.VITE_SERVER_URL}${
                                        category.previewImage
                                    }`}
                                    alt=""
                                />

                                <div className="p-[30px] flex flex-col gap-[30px] flex-grow">
                                    <div className="text-[26px] font-bold text-darkblue uppercase">
                                        {category.displayName}
                                    </div>
                                </div>
                                <div className="flex w-full gap-[15px] px-[30px] pb-[25px] ">
                                    <Link to={`/products/${category.pathName}`}>
                                        <SecondaryButton bonusStyles="group">
                                            <GlassIcon className="w-[32px] h-[23px] stroke-main group-hover:stroke-white cursor-pointer" />
                                        </SecondaryButton>
                                    </Link>
                                    <MainButton
                                        bonusStyles="w-full"
                                        onClick={() => {
                                            setIsOrderModalOpen(true);
                                        }}
                                    >
                                        Замовити
                                    </MainButton>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </Container>
            <AnimatePresence mode="wait">
                {isOrderModalOpen ? (
                    <Modal onClose={() => setIsOrderModalOpen(false)}>
                        <motion.div
                            key="order-modal"
                            initial={{ scale: 0.4, x: "-100vw" }}
                            animate={{ scale: 1, x: 0 }}
                            exit={{ scale: 0.4, x: "-100vw" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <OrdersModalContent
                                onClose={() => setIsOrderModalOpen(false)}
                            />
                        </motion.div>
                    </Modal>
                ) : null}
            </AnimatePresence>
        </>
    );
};

export default Products;
