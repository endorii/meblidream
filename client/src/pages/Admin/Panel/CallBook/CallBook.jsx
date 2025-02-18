import TrashIcon from "../../../../assets/svg/trash.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchOrders } from "../../../../store/slices/orders.slice";
import Modal from "../../../Modals/Modal";
import DeleteModalContent from "../../../Modals/Categories/DeleteModalContent";
import { deleteOrder } from "../../../../actions/orders.actions";

const CallBook = () => {
    const filters = [
        { name: "Спочатку новіші", value: "new" },
        { name: "Спочатку старіші", value: "old" },
    ];

    const { orders } = useSelector((state) => state.orders);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeOrder, setActiveOrder] = useState("");

    const [activeFilter, setActiveFilter] = useState(filters[0].value);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    return (
        <div>
            <div className="md:py-[30px] flex flex-col gap-[20px] md:flex-row justify-between">
                <div className="text-[30px] text-darkblue font-bold">
                    Список замовлених дзвінків
                </div>
                <div className="flex items-center max-[500px]:flex-col gap-[15px]">
                    <div>Фільтрація: </div>
                    <ul className="flex gap-[15px]">
                        {filters.map((filter, i) => {
                            return (
                                <li
                                    key={i}
                                    className={`font-semibold border rounded-xl px-[20px] py-[13px] transition duration-300 ease-in-out cursor-pointer ${
                                        activeFilter === filter.value
                                            ? "bg-mainbg text-white"
                                            : "text-main hover:bg-mainbg hover:text-white"
                                    }`}
                                    onClick={() =>
                                        setActiveFilter(filter.value)
                                    }
                                >
                                    {filter.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <hr className="border border-gray my-[30px] md:my-[0px]" />
            <div className="mt-[30px]">
                <ul className="flex flex-wrap gap-[30px]">
                    {orders.length > 0 ? (
                        orders.map((order, i) => {
                            return (
                                <li
                                    key={i}
                                    className="shadow-custom rounded-xl flex flex-col  basis-[45%] flex-1"
                                >
                                    <div className="text-white font-bold bg-main rounded-t-md text-center p-[10px] flex justify-center items-center">
                                        №<span>{i + 1}</span>
                                    </div>

                                    <div className="flex flex-col justify-between bg-white py-[30px] px-[10px] md:px-[30px] w-full">
                                        <div className="flex flex-col gap-[10px]">
                                            <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                                <div className="text-[12px] md:text-[15px] w-[25%]">
                                                    Ім&apos;я та прізвище:{" "}
                                                </div>
                                                <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                    {order.name}
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-[18px] font-semibold text-darkblue">
                                                <div className="text-[12px] md:text-[15px] w-[25%]">
                                                    Номер телефону:{" "}
                                                </div>
                                                <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                    {order.phone}
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                                <div className="text-[12px] md:text-[15px] w-[25%]">
                                                    Додаток/повідомлення:
                                                </div>
                                                <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                    {order.message}
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                                <div className="text-[12px] md:text-[15px] w-[25%]">
                                                    Дата відправлення заявки:
                                                </div>
                                                <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                    {`${order.createdAt.slice(
                                                        0,
                                                        10
                                                    )} / ${order.createdAt.slice(
                                                        11,
                                                        19
                                                    )}`}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="border-gray border-dashed" />
                                    <div className="flex justify-around items-center w-full h-[50px] md:h-[70px] mt-auto rounded-b-md">
                                        <button
                                            className="h-full hover:bg-main/5 w-full flex justify-center items-center rounded-xl"
                                            onClick={() => {
                                                setIsModalOpen(true);
                                                setActiveOrder(order);
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
            {isModalOpen ? (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <DeleteModalContent
                        title={`замовлення від ${activeOrder.name}`}
                        onClose={() => setIsModalOpen(false)}
                        onAction={async () => {
                            setIsModalOpen(false);
                            await deleteOrder(activeOrder._id);
                            dispatch(fetchOrders());
                        }}
                    />
                </Modal>
            ) : null}
        </div>
    );
};

export default CallBook;
