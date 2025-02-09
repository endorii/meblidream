import { Link } from "react-router-dom";
import TrashIcon from "../../../../assets/svg/trash.svg?react";
import InfoIcon from "../../../../assets/svg/info.svg?react";
import DoneIcon from "../../../../assets/svg/done.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOrders } from "../../../../store/slices/orders.slice";
import OrdersChart from "../../components/OrdersChart";
import MainButton from "../../../ui/buttons/MainButton";

const Welcome = () => {
    const { orders } = useSelector((state) => state.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
    }, []);

    return (
        <div>
            <div className="py-[30px] flex justify-between">
                <div className="text-[30px] text-darkblue font-bold">
                    Головна сторінка
                </div>
            </div>
            <hr className="border border-gray" />
            <div className="mt-[50px] flex flex-col flex-wrap gap-[20px]">
                <div className="flex flex-wrap md:flex-nowrap gap-[20px] w-full">
                    <div className="relative flex flex-1 bg-white shadow-custom rounded-xl p-[50px] md:w-[50%]">
                        <div className="flex flex-col gap-[5px]">
                            <div className="text-[26px] text-darkblue font-bold">
                                Вітаю в адмін панелі
                            </div>
                            <div className="text-[18px] text-darkgray">
                                у вас{" "}
                                <span className="text-[22px] text-darkblue font-bold">
                                    10
                                </span>{" "}
                                замовлень дзвінків
                            </div>

                            <Link to="callbook">
                                <MainButton bonusStyles={"mt-[20px] w-full"}>
                                    Переглянути
                                </MainButton>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[20px] w-full md:w-[50%]">
                        <div className="flex flex-col justify-between bg-white shadow-custom rounded-xl p-[30px] w-full md:w-[50%] h-auto ">
                            <div className="text-[26px] text-darkblue font-bold text-center">
                                Дзвінків за сьогодні
                            </div>
                            <div className="flex items-center justify-center gap-[10px] text-[40px] text-darkblue font-bold text-center">
                                <div>10</div>
                                <DoneIcon className="w-[40px] fill-[#000000]" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between bg-white shadow-custom rounded-xl p-[30px] w-full md:w-[50%] h-auto ">
                            <div className="text-[26px] text-darkblue font-bold text-center">
                                Дзвінків за місяць
                            </div>
                            <div className="flex items-center justify-center gap-[10px] text-[40px] text-darkblue font-bold text-center">
                                <div>10</div>
                                <DoneIcon className="w-[40px] fill-[#000000]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 w-full flex-wrap justify-between gap-[20px]">
                    <div className="shadow-custom bg-white w-full rounded-xl p-[20px] md:p-[50px]">
                        <div className="text-[18px] md:text-[26px] text-darkblue font-bold p-[10px]">
                            Статистика замовлених дзвінків
                        </div>
                        <div className="mt-[30px]">
                            <OrdersChart orders={orders} />
                        </div>
                    </div>
                    <div className="shadow-custom bg-white w-full rounded-xl p-[10px] md:p-[50px]">
                        <div className="text-[18px] md:text-[26px] text-darkblue font-bold p-[10px]">
                            Список замовлених дзвінків
                        </div>
                        <ul className="flex flex-col gap-[5px] mt-[15px] md:mt-[30px]">
                            {orders.slice(0, 5).map((order, i) => (
                                <li
                                    className="flex flex-1 gap-[15px] justify-between items-center p-[10px] md:p-[17px] hover:bg-main/5 rounded-md"
                                    key={i}
                                >
                                    <div className="w-[45%] text-[14px] md:text-[18px] text-darkblue font-semibold">
                                        {order.name}
                                    </div>
                                    <div className="w-[45%] text-[14px] md:text-[18px] text-darkblue">
                                        {order.phone}
                                    </div>
                                    <div className="flex gap-[5px] md:gap-[15px]">
                                        <button>
                                            <InfoIcon className="stroke-main w-[24px] md:w-[27px]" />
                                        </button>
                                        <button>
                                            <TrashIcon className="stroke-main w-[24px] md:w-[27px]" />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
