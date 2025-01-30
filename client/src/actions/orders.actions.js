import axios from "axios";

export const getOrders = async () => {
    try {
        const response = await axios.get("http://localhost:3000/orders");
        return response.data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};
