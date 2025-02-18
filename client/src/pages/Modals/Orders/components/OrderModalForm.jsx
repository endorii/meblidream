import { useState } from "react";
import { useDispatch } from "react-redux";
import MainButton from "../../../ui/buttons/MainButton";
import { addOrder } from "../../../../actions/orders.actions";
import { fetchOrders } from "../../../../store/slices/orders.slice";

const OrderModalForm = ({ onClose }) => {
    const dispatch = useDispatch();

    const themes = ["Здійснити замовлення", "Отримати консультацію", "Інше..."];

    const [activeTheme, setActiveTheme] = useState(themes[0]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div
            className={`bg-white flex flex-col gap-[20px] h-full rounded-2xl p-[20px] md:p-[40px] w-full`}
        >
            <div className="flex flex-col gap-[10px] ">
                <div className="text-[20px] font-semibold">
                    Я зацікавлений ...
                </div>

                <ul className="flex flex-wrap gap-[10px] text-center">
                    {themes.map((theme, i) => {
                        return (
                            <li
                                key={i}
                                className={`py-[10px] sm:py-[13px] px-[20px] border rounded-xl text-[15px] sm:text-[16px] cursor-pointer
                            ${
                                activeTheme === theme
                                    ? "bg-mainbg text-white"
                                    : "text-main hover:bg-mainbg hover:text-white"
                            }`}
                                onClick={() => {
                                    setActiveTheme(theme);
                                }}
                            >
                                {theme}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <form
                className="flex flex-col gap-[20px] mt-[10px] sm:mt-[30px] bg-white"
                action=""
            >
                <div className="flex flex-col gap-[15px]">
                    <div className="flex flex-col gap-[5px]">
                        <label
                            className="text-[14px] sm:text-[16px] font-semibold"
                            htmlFor="orderName"
                        >
                            Ім&apos;я та прізвище:
                        </label>
                        <input
                            className="p-[10px] border-b border-darkgray h-[50px] w-full outline-none text-[16px] md:text-[18px]"
                            type="text"
                            id="orderName"
                            name="orderName"
                            required
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <label
                            className="text-[14px] sm:text-[16px] font-semibold"
                            htmlFor="orderPhone"
                        >
                            Номер телефону:
                        </label>
                        <input
                            className="p-[10px] border-b border-darkgray h-[50px] w-full outline-none text-[16px] md:text-[18px]"
                            type="tel"
                            id="orderPhone"
                            name="orderPhone"
                            pattern="[0-9]{10}"
                            required
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}
                        />
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <label
                            className="text-[14px] sm:text-[16px] font-semibold"
                            htmlFor="orderMessage"
                        >
                            Повідомлення:
                        </label>
                        <textarea
                            className="p-[10px] border-b border-darkgray h-[70px] outline-none text-[16px] md:text-[18px]"
                            id="orderMessage"
                            name="orderMessage"
                            rows="4"
                            required
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        ></textarea>
                    </div>
                </div>
                <MainButton
                    bonusStyles=""
                    onClick={async () => {
                        await addOrder(activeTheme, name, phone, message);
                        dispatch(fetchOrders());
                        onClose();
                    }}
                    isDisabled={!activeTheme || !name || !phone || !message}
                >
                    Відправити
                </MainButton>
            </form>
        </div>
    );
};

export default OrderModalForm;
