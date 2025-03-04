import { useState } from "react";
import MainButton from "../../ui/buttons/MainButton";
import TrashIcon from "../../../assets/svg/trash.svg?react";
import PlusIcon from "../../../assets/svg/plus.svg?react";
import { addImage, deleteImage } from "../../../actions/file.actions";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../../store/slices/categories.slice";

const CategoryImagesModal = ({ onClose, currentCategory }) => {
    const dispatch = useDispatch();

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleAddImage = async () => {
        if (!selectedFile) {
            return;
        }
        try {
            await addImage(currentCategory._id, selectedFile);
            setSelectedFile(null);
            dispatch(fetchCategories());
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleDeleteImage = async (imagePath) => {
        try {
            await deleteImage(currentCategory._id, imagePath);
            dispatch(fetchCategories());
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-custom relative w-[95vw] h-[95vh] overflow-y-auto">
            <div className="flex items-center flex-col justify-center sm:flex-row sm:justify-between p-[20px] sm:p-[40px] shadow-custom gap-[10px]">
                <div className="text-[24px] sm:text-[30px] font-semibold">
                    Дії з зображеннями
                </div>
                <div className="flex justify-end gap-[10px]">
                    <MainButton onClick={onClose}>Повернутися назад</MainButton>
                </div>
            </div>
            <div className="flex flex-col gap-[20px] p-[40px]">
                <div className="flex flex-col gap-[25px]">
                    <ul className="flex flex-wrap gap-[30px] items-center justify-start">
                        <li className="relative flex shadow-custom rounded-xl items-center">
                            {selectedFile ? (
                                <img
                                    className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-md object-cover"
                                    src={URL.createObjectURL(selectedFile)} // Показати вибране зображення
                                    alt="selected"
                                />
                            ) : (
                                <div
                                    className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-md bg-gray/100 object-cover"
                                    alt="image"
                                />
                            )}
                            <button
                                onClick={() =>
                                    document.getElementById("fileInput").click()
                                }
                                className="absolute inset-0 flex items-center justify-center hover:bg-black/50 rounded-md transition duration-300 ease-in-out backdrop-blur-[2px]"
                            >
                                <PlusIcon className="w-[70px] stroke-white" />
                            </button>
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </li>
                        <li>
                            <MainButton
                                isDisabled={!selectedFile}
                                onClick={handleAddImage}
                            >
                                Підтвердити
                            </MainButton>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[25px]">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Список зображень
                    </h3>
                    <ul className="flex flex-wrap gap-[30px] items-center">
                        {currentCategory.images.length > 0 ? (
                            currentCategory.images.map((image, i) => (
                                <li
                                    key={i}
                                    className="relative flex shadow-custom rounded-xl items-center"
                                >
                                    <img
                                        className="w-[200px] md:w-[250px] h-[200px] md:h-[250px] rounded-md object-cover"
                                        src={`http://localhost:5000${image}`}
                                        alt="image"
                                    />
                                    <button
                                        onClick={() => handleDeleteImage(image)}
                                        className="absolute inset-0 flex items-center justify-center opacity-0 hover:bg-black/50 hover:opacity-100 rounded-md transition duration-300 ease-in-out backdrop-blur-[2px]"
                                    >
                                        <TrashIcon className="w-[70px] stroke-white" />
                                    </button>
                                </li>
                            ))
                        ) : (
                            <div className="text-[22px] text-darkgray italic">
                                [Список зображень наразі порожній]
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CategoryImagesModal;
