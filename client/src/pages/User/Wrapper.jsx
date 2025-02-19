import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Request from "./Request";
import Loader from "../ui/Loader/Loader";
import ScrollToTop from "../ui/ScrollToTop/ScrollToTop";
import { useState } from "react";
import Modal from "../Modals/Modal";
import OrdersModalContent from "../Modals/Orders/OrdersModalContent";
import { AnimatePresence, motion } from "motion/react";

const Wrapper = () => {
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    return (
        <>
            <Header setIsOrderModalOpen={setIsOrderModalOpen}></Header>
            <Loader />
            <ScrollToTop />
            <div>
                <Outlet />
            </div>
            <Request />
            <Footer setIsOrderModalOpen={setIsOrderModalOpen}></Footer>

            <AnimatePresence mode="wait">
                {isOrderModalOpen && (
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
                )}
            </AnimatePresence>
        </>
    );
};

export default Wrapper;
