import axios from "axios";

export const getCategories = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/categories`);
        return response.data.categories;
    } catch (e) {
        console.log(e);
    }
};

export const addCategories = async (
    displayName,
    pathName,
    title,
    subtitle,
    description,
    images
) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/categories`, {
            displayName,
            pathName,
            filling: {
                title,
                subtitle,
                description,
            },
            images,
        });

        return response.data;
    } catch (e) {
        console.log(e.response.data.message);
    }
};

export const deleteCategory = async (categoryId) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/categories/${categoryId}`);

        return response.data;
    } catch (e) {
        console.log(e.response.data.message);
    }
};
