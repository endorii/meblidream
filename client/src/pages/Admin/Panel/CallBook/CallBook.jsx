import TrashIcon from "../../../../assets/svg/trash.svg?react";
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
        <div>
            <div className="py-[30px] flex justify-between">
                <div className="text-[30px] text-darkblue font-bold">
                    Список замовлених дзвінків
                </div>
                <div className="flex items-center gap-[10px]">
                    <div>Фільтрація: </div>
                    <button className="border flex gap-[10px] items-center text-white font-semibold rounded-xl px-[20px] py-[10px] hover:border-main hover:text-main hover:bg-whitebg bg-mainbg group transition duration-300 ease-in-out">
                        Спочатку новіші
                    </button>
                    <button className="border flex gap-[10px] items-center text-white font-semibold rounded-xl px-[20px] py-[10px] hover:border-main hover:text-main hover:bg-whitebg bg-mainbg group transition duration-300 ease-in-out">
                        Спочатку старіші
                    </button>
                </div>
            </div>
            <hr className="border border-gray" />
            <div className="mt-[30px]">
                <ul className="flex flex-wrap gap-[30px]">
                    {orders.map((order, i) => {
                        return (
                            <li
                                key={i}
                                className="shadow-custom rounded-xl flex flex-col  basis-[31%] flex-1"
                            >
                                <div className="text-white font-bold bg-main rounded-t-md text-center p-[10px] flex justify-center items-center">
                                    №<span>{i + 1}</span>
                                </div>

                                <div className="flex flex-col justify-between items-center bg-white py-[30px] px-[30px] w-full">
                                    <div className="flex flex-col gap-[10px]">
                                        <div className="flex justify-between text-[18px] font-semibold text-darkblue">
                                            <div className="text-[15px] w-[25%]">
                                                Ім&apos;я та прізвище:{" "}
                                            </div>
                                            <div className="w-[70%] text-darkblue text-right font-bold text-[18px]">
                                                {order.name}
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[18px] font-semibold text-darkblue">
                                            <div className="text-[15px] w-[25%]">
                                                Номер телефону:{" "}
                                            </div>
                                            <div className="w-[70%] text-darkblue text-right font-bold text-[18px]">
                                                {order.phone}
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[18px] font-semibold text-darkblue">
                                            <div className="text-[15px] w-[25%]">
                                                Додаток/повідомлення:
                                            </div>
                                            <div className="w-[70%] text-darkblue text-right font-bold text-[18px]">
                                                {order.message}
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[18px] font-semibold text-darkblue">
                                            <div className="text-[15px] w-[25%]">
                                                Дата відправлення заявки:
                                            </div>
                                            <div className="w-[70%] text-darkblue text-right font-bold text-[18px]">
                                                {order.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-gray border-dashed" />
                                <div className="flex justify-around items-center w-full h-[70px] mt-auto rounded-b-md">
                                    <button
                                        className="h-full hover:bg-main/5 w-full flex justify-center items-center rounded-xl"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        <TrashIcon className="stroke-main w-[27px]" />
                                    </button>
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
