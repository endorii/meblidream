import TrashIcon from "../../../../assets/svg/trash.svg?react";
import Done2Icon from "../../../../assets/svg/done2.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { fetchOrders } from "../../../../store/slices/orders.slice";
import Modal from "../../../Modals/Modal";
import DeleteModalContent from "../../../Modals/Categories/DeleteModalContent";
import { closeOrder, deleteOrder } from "../../../../actions/orders.actions";
import { AnimatePresence, motion } from "motion/react";
import CloseModalContent from "../../../Modals/Categories/CloseCategoryModal";

const CallBook = () => {
    const filters = [
        { name: "Спочатку новіші", value: "new" },
        { name: "Спочатку старіші", value: "old" },
    ];

    const statusFilters = [
        { name: "Всі", value: "all" },
        { name: "Активні", value: "active" },
        { name: "Закриті", value: "closed" },
    ];

    const { orders } = useSelector((state) => state.orders);
    const dispatch = useDispatch();

    const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [activeOrder, setActiveOrder] = useState("");
    const [activeFilter, setActiveFilter] = useState(filters[0].value);
    const [activeStatusFilter, setActiveStatusFilter] = useState(
        statusFilters[1].value
    );

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const filteredOrders = useMemo(() => {
        let filtered = [...orders];

        if (activeStatusFilter !== "all") {
            filtered = filtered.filter((order) =>
                activeStatusFilter === "active"
                    ? order.status !== "Закрите"
                    : order.status === "Закрите"
            );
        }

        return filtered.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return activeFilter === "old" ? dateA - dateB : dateB - dateA;
        });
    }, [orders, activeFilter, activeStatusFilter]);

    return (
        <div>
            <div className="md:py-[30px] flex flex-col gap-[20px] justify-between">
                <div className="text-[30px] text-darkblue font-bold">
                    Список замовлених дзвінків
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="flex items-center max-[500px]:flex-col gap-[15px]">
                        <div>Фільтрація за датою: </div>
                        <ul className="flex gap-[15px]">
                            {filters.map((filter, i) => (
                                <li
                                    key={i}
                                    className={`font-semibold border rounded-xl text-center px-[20px] py-[13px] transition duration-300 ease-in-out cursor-pointer ${
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
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center max-[500px]:flex-col gap-[15px]">
                        <div>Фільтрація за статусом: </div>
                        <ul className="flex gap-[15px]">
                            {statusFilters.map((statusFilter, i) => (
                                <li
                                    key={i}
                                    className={`font-semibold border rounded-xl text-center px-[20px] py-[13px] transition duration-300 ease-in-out cursor-pointer ${
                                        activeStatusFilter ===
                                        statusFilter.value
                                            ? "bg-mainbg text-white"
                                            : "text-main hover:bg-mainbg hover:text-white"
                                    }`}
                                    onClick={() =>
                                        setActiveStatusFilter(
                                            statusFilter.value
                                        )
                                    }
                                >
                                    {statusFilter.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border border-gray my-[30px] md:my-[0px]" />
            <div className="mt-[30px]">
                <ul className="flex flex-wrap gap-[30px]">
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map((order, i) => {
                            const createdAt = new Date(order.createdAt);
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
                                    className={`shadow-custom rounded-xl flex flex-col basis-[48%] flex-1 ${
                                        order.status === "Закрите"
                                            ? "grayscale"
                                            : ""
                                    }`}
                                >
                                    <div className="text-white font-bold bg-mainbg rounded-t-md text-center h-[50px] p-[10px] flex justify-center items-center">
                                        №<span>{i + 1}</span>
                                    </div>

                                    <div
                                        className={`flex flex-col justify-between py-[30px] px-[10px] md:px-[30px] w-full ${
                                            order.status === "Закрите"
                                                ? "bg-gray/50"
                                                : ""
                                        }`}
                                    >
                                        <div className="flex flex-col gap-[10px]">
                                            <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                                <div className="text-[12px] md:text-[15px] w-[25%]">
                                                    Ім&apos;я та прізвище:
                                                </div>
                                                <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                    {order.name}
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-[18px] font-semibold text-darkblue">
                                                <div className="text-[12px] md:text-[15px] w-[25%]">
                                                    Номер телефону:
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
                                                    {formattedDate}
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-[16px] md:text-[18px] font-semibold text-darkblue">
                                                <div className="text-[12px] md:text-[15px] w-[25%]">
                                                    Статус:
                                                </div>
                                                <div className="w-[70%] text-darkblue text-right font-bold text-[16px] md:text-[18px]">
                                                    {order.status}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr
                                        className={`border-gray border-dashed ${
                                            order.status === "Закрите"
                                                ? "border-black"
                                                : ""
                                        }`}
                                    />
                                    <div
                                        className={`flex justify-around items-center w-full h-[50px] md:h-[70px] mt-auto rounded-b-md ${
                                            order.status === "Закрите"
                                                ? "bg-gray/50"
                                                : ""
                                        }`}
                                    >
                                        {order.status === "Закрите" ? null : (
                                            <button
                                                className="h-full w-[200%] hover:bg-main/5 flex justify-center items-center"
                                                onClick={() => {
                                                    setIsCloseModalOpen(true);
                                                    setActiveOrder(order);
                                                }}
                                            >
                                                <Done2Icon className="fill-main w-[30px]" />
                                            </button>
                                        )}

                                        <button
                                            className="h-full hover:bg-main/5 w-full flex justify-center items-center"
                                            onClick={() => {
                                                setIsDeleteModalOpen(true);
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
            <AnimatePresence mode="wait">
                {isCloseModalOpen && (
                    <Modal onClose={() => setIsCloseModalOpen(false)}>
                        <motion.div
                            key="order-modal"
                            initial={{ scale: 0.4, y: "-100vh" }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.4, y: "-100vh" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <CloseModalContent
                                title={`замовлення від ${activeOrder.name}`}
                                onClose={() => setIsCloseModalOpen(false)}
                                onAction={async () => {
                                    setIsCloseModalOpen(false);
                                    await closeOrder(activeOrder._id);
                                    dispatch(fetchOrders());
                                }}
                            />
                        </motion.div>
                    </Modal>
                )}
            </AnimatePresence>
            <AnimatePresence mode="wait">
                {isDeleteModalOpen && (
                    <Modal onClose={() => setIsDeleteModalOpen(false)}>
                        <motion.div
                            key="order-modal"
                            initial={{ scale: 0.4, y: "-100vh" }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.4, y: "-100vh" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <DeleteModalContent
                                title={`замовлення від ${activeOrder.name}`}
                                onClose={() => setIsDeleteModalOpen(false)}
                                onAction={async () => {
                                    setIsDeleteModalOpen(false);
                                    await deleteOrder(activeOrder._id);
                                    dispatch(fetchOrders());
                                }}
                            />
                        </motion.div>
                    </Modal>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CallBook;
