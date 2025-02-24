import axios from "axios";

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

        return response.data;
    } catch (e) {
        console.log(e.response.data.message);
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
        console.log(response.data);

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
