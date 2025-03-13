import axios from "axios";
import toast from "react-hot-toast";

export const getCategories = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
        return response.data.categories;
    } catch (e) {
        console.log(e);
    }
};

export const getCategory = async (categoryId) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/categories/${categoryId}`
        );
        return response.data.category;
    } catch (e) {
        console.log(e);
    }
};

export const addCategory = async (displayName, pathName, title, subtitle, description) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/categories`, {
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
        const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/categories/${categoryId}`,
            {
                displayName,
                pathName,
                filling: {
                    title,
                    subtitle,
                    description,
                },
            }
        );
        toast.success("Категорію успішно відредаговано!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при редагуванні категорії");
        throw e;
    }
};

export const deleteCategory = async (categoryId) => {
    try {
        const response = await axios.delete(
            `${import.meta.env.VITE_API_URL}/categories/${categoryId}`
        );
        toast.success("Категорію успішно видалено!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при видаленні категорії");
        throw e;
    }
};
