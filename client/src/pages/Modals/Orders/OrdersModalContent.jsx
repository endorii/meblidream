import OrderModalData from "./components/OrderModalData";
import OrderModalForm from "./components/OrderModalForm";

const OrdersModalContent = ({ onClose }) => {
    return (
        <div className="bg-darkblue flex gap-[50px] p-[20px] md:p-[40px] rounded-2xl shadow-custom relative w-[95vw] xl:w-[85vw] h-[95vh] xl:h-[85vh] overflow-y-auto flex-col xl:flex-row">
            <OrderModalData onClose={onClose} />
            <OrderModalForm onClose={onClose} />
        </div>
    );
};

export default OrdersModalContent;
