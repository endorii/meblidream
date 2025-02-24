import axios from "axios";
import toast from "react-hot-toast";

export const getCategories = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/categories`);
        return response.data.categories;
    } catch (e) {
        console.log(e);
    }
};

export const addCategory = async (displayName, pathName, title, subtitle, description) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/categories`, {
            displayName,
            pathName,
            filling: {
                title,
                subtitle,
                description,
            },
        });
        toast.success("Категорію успішно додано!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при додаванні категорії");
        throw e;
    }
};

export const editCategory = async (
    categoryId,
    displayName,
    pathName,
    title,
    subtitle,
    description
) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/categories/${categoryId}`, {
            displayName,
            pathName,
            filling: {
                title,
                subtitle,
                description,
            },
        });
        toast.success("Категорію успішно відредаговано!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при редагуванні категорії");
        throw e;
    }
};

export const deleteCategory = async (categoryId) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/categories/${categoryId}`);
        toast.success("Категорію успішно видалено!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при видаленні категорії");
        throw e;
    }
};
