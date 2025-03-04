import axios from "axios";
import toast from "react-hot-toast";

export const addImage = async (categoryId, file) => {
    try {
        const formData = new FormData();
        formData.append("picture", file);

        const response = await axios.put(
            `http://localhost:5000/api/upload/${categoryId}`,
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );

        toast.success("Зображення успішно додано!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при додаванні зображення");
        throw e;
    }
};

export const deleteImage = async (categoryId, imagePath) => {
    try {
        const response = await axios.delete(
            `http://localhost:5000/api/delete-image/${categoryId}`,
            {
                params: { imagePath },
            }
        );

        toast.success("Зображення успішно видалено!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при видаленні зображення");
        throw e;
    }
};
