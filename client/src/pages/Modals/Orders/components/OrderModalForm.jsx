import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import MainButton from "../../../ui/buttons/MainButton";
import { addOrder } from "../../../../actions/orders.actions";
import { fetchOrders } from "../../../../store/slices/orders.slice";

const OrderModalForm = ({ onClose }) => {
    const dispatch = useDispatch();
    const themes = ["Здійснити замовлення", "Отримати консультацію", "Інше..."];
    const [activeTheme, setActiveTheme] = useState(themes[0]);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({ mode: "onTouched" });

    const onSubmit = async (data) => {
        await addOrder(activeTheme, data.name, data.phone, data.message);
        dispatch(fetchOrders());
        onClose();
        reset();
    };

    return (
        <div className="bg-white flex flex-col gap-[20px] h-full rounded-2xl p-[20px] md:p-[40px] w-full">
            <div className="flex flex-col gap-[10px]">
                <div className="text-[20px] font-semibold">
                    Я зацікавлений ...
                </div>
                <ul className="flex flex-wrap gap-[10px] text-center">
                    {themes.map((theme, i) => (
                        <li
                            key={i}
                            className={`py-[10px] sm:py-[13px] px-[20px] border rounded-xl text-[15px] sm:text-[16px] cursor-pointer ${
                                activeTheme === theme
                                    ? "bg-mainbg text-white"
                                    : "text-main hover:bg-mainbg hover:text-white"
                            }`}
                            onClick={() => setActiveTheme(theme)}
                        >
                            {theme}
                        </li>
                    ))}
                </ul>
            </div>
            <form
                className="flex flex-col gap-[20px] mt-[10px] sm:mt-[30px]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col">
                        <label
                            className="text-[14px] sm:text-[16px] font-semibold"
                            htmlFor="name"
                        >
                            Ім&apos;я та прізвище:
                        </label>
                        <input
                            className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                            type="text"
                            id="name"
                            {...register("name", {
                                required: "Це поле обов'язкове",
                            })}
                        />
                        {errors.name && (
                            <span className="text-red mt-[5px] text-sm">
                                {errors.name.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="text-[14px] sm:text-[16px] font-semibold"
                            htmlFor="phone"
                        >
                            Номер телефону:
                        </label>
                        <input
                            className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                            type="tel"
                            id="phone"
                            {...register("phone", {
                                required: "Це поле обов'язкове",
                                pattern: {
                                    value: /^\+?3?8?(0\d{9})$/,
                                    message:
                                        "Введіть коректний номер телефону у форматі +380XXXXXXXXX або 0XXXXXXXXX",
                                },
                            })}
                        />
                        {errors.phone && (
                            <span className="text-red mt-[5px] text-sm">
                                {errors.phone.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="text-[14px] sm:text-[16px] font-semibold"
                            htmlFor="message"
                        >
                            Повідомлення:
                        </label>
                        <textarea
                            className="p-[10px] border-b border-darkgray/20 focus:border-main h-[70px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                            id="message"
                            rows="4"
                            {...register("message")}
                        ></textarea>
                    </div>
                </div>
                <MainButton bonusStyles="" type="submit" isDisabled={!isValid}>
                    Відправити
                </MainButton>
            </form>
        </div>
    );
};

export default OrderModalForm;
