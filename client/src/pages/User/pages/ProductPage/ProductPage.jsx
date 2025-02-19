import { useState } from "react";
import Modal from "../../../Modals/Modal";
import OrdersModalContent from "../../../Modals/Orders/OrdersModalContent";
import Container from "../WelcomePage/components/Container";
import MainButton from "../../../ui/buttons/MainButton";
import { AnimatePresence, motion } from "motion/react";

const ProductPage = ({ category }) => {
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    if (!category) {
        return (
            <div className="pt-[130px] text-center text-[50px]">
                Категорію не знайдено :(
            </div>
        );
    }

    return (
        <div>
            <div className="relative">
                <img
                    className="w-[100vw] h-[60vh] object-cover"
                    src="https://colorit-mebel.od.ua/wp-content/uploads/2023/06/kuhni-na-zakaz-odessakuhnya-v-sovremennom-stile-1.jpg"
                    alt=""
                />
                <div className="absolute top-0 text-center w-full p-[50px] flex items-center justify-center h-full flex-col gap-[20px]">
                    <h2 className="mt-[0px] lg:mt-[40px] text-center lg:text-right font-bold text-[60px] lg:text-[120px] leading-[70px] lg:leading-[140px] text-white">
                        {category.displayName}
                    </h2>
                </div>
            </div>
            <Container>
                <div className="flex flex-col">
                    <div className="text-center w-full p-[50px] flex items-center justify-center h-full flex-col gap-[20px]">
                        <div className="text-4xl lg:text-5xl xl:text-[70px] font-medium leading-tight">
                            {category.filling.title}
                        </div>
                        <hr className="border-darkgray w-[10%] m-[20px]" />
                        <div className=" text-[20px] lg:text-[24px] w-[90%] font-[200]">
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
                    <div className=" text-[20px] lg:text-[24px] text-center font-[200] m-[50px_20px] sm:m-[100px]">
                        {category.filling.description}
                    </div>
                    <MainButton
                        bonusStyles="w-[90%] md:w-[40%] sm:w-[50%] xl:w-[30%] text-[24px] px-[40px] py-[20px] m-[0_auto]"
                        onClick={() => {
                            setIsOrderModalOpen(true);
                        }}
                    >
                        Залишити заявку
                    </MainButton>
                </div>
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
        </div>
    );
};

export default ProductPage;
