import axios from "axios";
import toast from "react-hot-toast";

export const getOrders = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/orders`);
        return response.data.orders;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const addOrder = async (theme, name, phone, message) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/orders`, {
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

export const deleteOrder = async (orderId) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/orders/${orderId}`);
        toast.success("Замовлення успішно видалено!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при видаленні категорії");
        throw e;
    }
};
