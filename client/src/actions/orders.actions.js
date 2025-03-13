import axios from "axios";
import toast from "react-hot-toast";

export const getOrders = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/orders`);
        return response.data.orders;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const addOrder = async (theme, name, phone, message) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/orders`, {
            theme,
            name,
            phone,
            message,
        });
        toast.success("Замовлення успішно додано!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при додаванні замовлення");
        throw e;
    }
};

export const closeOrder = async (orderId) => {
    try {
        const response = await axios.patch(`${import.meta.env.VITE_API_URL}/orders/${orderId}`, {
            status: "Закрите",
        });
        toast.success("Замовлення успішно закрито!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при закритті замовлення");
        throw e;
    }
};

export const deleteOrder = async (orderId) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/orders/${orderId}`);
        toast.success("Замовлення успішно видалено!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при видаленні категорії");
        throw e;
    }
};
