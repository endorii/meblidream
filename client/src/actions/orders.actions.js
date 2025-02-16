import axios from "axios";

export const getOrders = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/orders`);
        return response.data.orders;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const addOrder = async (name, phone, message) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/orders`, {
            name,
            phone,
            message,
        });

        return response.data;
    } catch (e) {
        console.log(e.response.data.message);
    }
};

export const deleteOrder = async (orderId) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/orders/${orderId}`);

        return response.data;
    } catch (e) {
        console.log(e.response.data.message);
    }
};
