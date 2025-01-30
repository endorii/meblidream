import axios from "axios";

export const getCategories = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/categories`);
        return response.data;
    } catch (e) {
        console.log("Помилка при отриманні категорій:", e.message);
        throw e;
    }
};
