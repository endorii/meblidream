import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Request from "./Request";
import Loader from "../ui/Loader/Loader";
import ScrollToTop from "../ui/ScrollToTop/ScrollToTop";
import { useState } from "react";
import Modal from "../Modals/Modal";
import OrdersModalContent from "../Modals/Orders/OrdersModalContent";

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

            {isOrderModalOpen ? (
                <Modal onClose={() => setIsOrderModalOpen(false)}>
                    <OrdersModalContent
                        onClose={() => setIsOrderModalOpen(false)}
                    />
                </Modal>
            ) : null}
        </>
    );
};

export default Wrapper;
