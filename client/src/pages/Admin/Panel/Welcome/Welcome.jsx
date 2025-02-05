import { Link } from "react-router-dom";
import Humans from "../../../../assets/img/humans.png";
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
            <div className="mt-[50px] flex flex-col gap-[20px]">
                <div className="flex gap-[20px]">
                    <div className="relative flex flex-1 bg-white shadow-custom rounded-xl p-[50px] w-[60%]">
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
                        <img
                            className="absolute bottom-0 right-[30px] w-[530px] h-[300px] object-cover"
                            src={Humans}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-between bg-white shadow-custom rounded-xl p-[30px] w-[270px] h-[270px]">
                        <div className="text-[26px] text-darkblue font-bold text-center">
                            Дзвінків за сьогодні
                        </div>
                        <div className="flex items-center justify-center gap-[10px] text-[40px] text-darkblue font-bold text-center">
                            <div>10</div>
                            <DoneIcon className="w-[40px] fill-[#000000]" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-white shadow-custom rounded-xl p-[30px] w-[270px] h-[270px]">
                        <div className="text-[26px] text-darkblue font-bold text-center">
                            Дзвінків за місяць
                        </div>
                        <div className="flex items-center justify-center gap-[10px] text-[40px] text-darkblue font-bold text-center">
                            <div>10</div>
                            <DoneIcon className="w-[40px] fill-[#000000]" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 justify-between gap-[20px]">
                    <div className="shadow-custom bg-white w-[50%] rounded-xl p-[50px]">
                        <div className="text-[26px] text-darkblue font-bold">
                            Статистика замовлених дзвінків
                        </div>
                        <div className="mt-[30px]">
                            <OrdersChart orders={orders} />
                        </div>
                    </div>
                    <div className="shadow-custom bg-white w-[50%] rounded-xl p-[50px]">
                        <div className="text-[26px] text-darkblue font-bold">
                            Список замовлених дзвінків
                        </div>
                        <ul className="flex flex-col gap-[5px] mt-[30px]">
                            {orders.slice(0, 5).map((order, i) => (
                                <li
                                    className="flex flex-1 gap-[10px] justify-between  items-center p-[17px] hover:bg-main/5 rounded-md"
                                    key={i}
                                >
                                    <div className="w-[45%] text-[18px] text-darkblue font-semibold">
                                        {order.name}
                                    </div>
                                    <div className="w-[45%] text-[18px] text-darkblue">
                                        {order.phone}
                                    </div>
                                    <div className="flex gap-[15px]">
                                        <button>
                                            <InfoIcon className="stroke-main w-[27px]" />
                                        </button>
                                        <button>
                                            <TrashIcon className="stroke-main w-[27px]" />
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
