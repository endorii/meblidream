import { Link } from "react-router-dom";
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
            <div className="md:py-[30px] flex flex-col gap-[20px] md:flex-row justify-between">
                <div className="text-[30px] text-darkblue font-bold">
                    Домашня сторінка
                </div>
            </div>
            <hr className="border border-gray my-[30px] md:my-[0px]" />
            <div className="mt-[30px] flex flex-col flex-wrap gap-[20px]">
                <div className="flex flex-wrap md:flex-nowrap gap-[20px] w-full">
                    <div className="relative flex flex-1 bg-white shadow-custom rounded-xl p-[50px] md:w-[50%]">
                        <div className="flex flex-col gap-[5px]">
                            <div className="text-[26px] text-darkblue font-bold">
                                Вітаю в адмін панелі
                            </div>
                            <div className="text-[18px] text-darkgray">
                                у вас{" "}
                                <span className="text-[22px] text-darkblue font-bold">
                                    {orders.length}
                                </span>{" "}
                                замовлень дзвінків
                            </div>

                            <Link to="callbook">
                                <MainButton bonusStyles="mt-[20px] w-full">
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
                </div>
            </div>
        </div>
    );
};

export default Welcome;
