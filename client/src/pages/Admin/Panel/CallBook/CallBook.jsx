import Trash from "../../../../assets/svg/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchOrders } from "../../../../store/slices/orders.slice";
import Modal from "../../../Modals/Modal";
import DeleteOrderModalContent from "../../../Modals/Orders/DeleteOrderModalContent";

const CallBook = () => {
    const { orders } = useSelector((state) => state.orders);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchOrders());
    }, []);

    return (
        <div className="overflow-y-auto">
            <div className="py-[15px] flex justify-between">
                <div className="text-[50px] text-main uppercase font-[500]">
                    Список замовлених дзвінків
                </div>
                <div className="flex items-center gap-[10px]">
                    <div>Фільтрація: </div>
                    <button className="border border-main text-main font-semibold rounded-xl px-[30px] py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                        Спочатку новіші
                    </button>
                    <button className="border border-main text-main font-semibold rounded-xl px-[30px] py-[10px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                        Спочатку старіші
                    </button>
                </div>
            </div>
            <hr className="border border-gray" />
            <div className="mt-[30px]">
                <ul className="flex flex-col gap-[30px] p-[20px]">
                    {orders.map((order, i) => {
                        return (
                            <li key={i} className="shadow-md rounded-xl flex ">
                                <div className="text-white font-bold w-[5%] bg-main rounded-l-xl text-center flex justify-center items-center">
                                    №<span>{i}</span>
                                </div>

                                <div className="flex justify-between items-center py-[30px] px-[50px] w-full">
                                    <div className="w-[80%]">
                                        <div className="text-[16px]">
                                            Ім&apos;я та прізвище:{" "}
                                            <span className="text-main font-bold text-[20px]">
                                                {order.name}
                                            </span>
                                        </div>
                                        <div className="text-[16px]">
                                            Номер телефону:{" "}
                                            <span className="text-main font-bold text-[20px]">
                                                {order.phone}
                                            </span>
                                        </div>
                                        <div className="text-[16px]">
                                            Додаток/повідомлення: <br />
                                            <span className="text-main font-bold text-[20px]">
                                                {order.message}
                                            </span>
                                        </div>
                                        <div className="text-[16px]">
                                            Дата відправлення заявки: <br />
                                            <span className="text-main font-bold text-[20px]">
                                                {order.date}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-[2px]">
                                        <button
                                            className="p-[10px] hover:bg-main/10 rounded-md"
                                            onClick={() => setIsModalOpen(true)}
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
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <DeleteOrderModalContent
                    onClose={() => setIsModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default CallBook;
