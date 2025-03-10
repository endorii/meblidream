import { useState } from "react";
import MainButton from "../../ui/buttons/MainButton";
import TrashIcon from "../../../assets/svg/trash.svg?react";
import PlusIcon from "../../../assets/svg/plus.svg?react";
import {
    addImage,
    deleteImage,
    addBgImage,
    deleteBgImage,
    addPreviewImage,
    deletePreviewImage,
} from "../../../actions/file.actions";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../../store/slices/categories.slice";
import { getCategory } from "../../../actions/categories.actions";

const ImageUploader = ({ label, selectedFile, setSelectedFile, onUpload }) => {
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <div className="flex flex-col gap-[10px]">
            <div className="font-semibold">{label}</div>
            <div className="flex items-center flex-col gap-[15px]">
                <div className="relative flex shadow-custom rounded-xl items-center">
                    {selectedFile ? (
                        <img
                            className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-md object-cover"
                            src={URL.createObjectURL(selectedFile)}
                            alt="selected"
                        />
                    ) : (
                        <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-md bg-gray/100 object-cover" />
                    )}
                    <button
                        onClick={() => document.getElementById(label).click()}
                        className="absolute inset-0 flex items-center justify-center hover:bg-black/50 rounded-md transition duration-300 ease-in-out backdrop-blur-[2px]"
                    >
                        <PlusIcon className="w-[70px] stroke-white" />
                    </button>
                    <input
                        id={label}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </div>
                <div>
                    <MainButton isDisabled={!selectedFile} onClick={onUpload}>
                        Підтвердити
                    </MainButton>
                </div>
            </div>
        </div>
    );
};

const CategoryImagesModal = ({
    onClose,
    currentCategory,
    setCurrentCategory,
}) => {
    const dispatch = useDispatch();

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedBgFile, setSelectedBgFile] = useState(null);
    const [selectedPreviewFile, setSelectedPreviewFile] = useState(null);

    const handleAddImage = async (file, setFile, addImageFunc) => {
        if (!file) return;
        try {
            await addImageFunc(currentCategory._id, file);
            setFile(null);
            const updatedCategory = await getCategory(currentCategory._id);
            setCurrentCategory(updatedCategory);
            dispatch(fetchCategories());
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleDeleteImage = async (imagePath, deleteFunc) => {
        try {
            await deleteFunc(currentCategory._id, imagePath);
            dispatch(fetchCategories());
            const updatedCategory = await getCategory(currentCategory._id);
            setCurrentCategory(updatedCategory);
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
                <div className="flex gap-[25px] flex-row flex-wrap">
                    <ImageUploader
                        label="Завантажити фото в список"
                        selectedFile={selectedFile}
                        setSelectedFile={setSelectedFile}
                        onUpload={() =>
                            handleAddImage(
                                selectedFile,
                                setSelectedFile,
                                addImage
                            )
                        }
                    />
                    {!currentCategory.bgImage ? (
                        <ImageUploader
                            label="Завантажити фото на бекграунд"
                            selectedFile={selectedBgFile}
                            setSelectedFile={setSelectedBgFile}
                            onUpload={() =>
                                handleAddImage(
                                    selectedBgFile,
                                    setSelectedBgFile,
                                    addBgImage
                                )
                            }
                        />
                    ) : null}
                    {!currentCategory.previewImage ? (
                        <ImageUploader
                            label="Завантажити фото на прев'ю"
                            selectedFile={selectedPreviewFile}
                            setSelectedFile={setSelectedPreviewFile}
                            onUpload={() =>
                                handleAddImage(
                                    selectedPreviewFile,
                                    setSelectedPreviewFile,
                                    addPreviewImage
                                )
                            }
                        />
                    ) : null}
                </div>
                {["previewImage", "bgImage", "images"].map((key) => (
                    <div key={key} className="flex flex-col gap-[25px]">
                        <h3 className="text-lg font-semibold text-gray-800">
                            {key === "previewImage"
                                ? "Прев'ю зображення"
                                : key === "bgImage"
                                ? "Бекграунд зображення"
                                : "Список зображень"}
                        </h3>
                        <ul className="flex flex-wrap gap-[30px] items-center">
                            {Array.isArray(currentCategory[key]) ? (
                                currentCategory[key].length > 0 ? (
                                    currentCategory[key].map((image, i) => (
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
                                                onClick={() =>
                                                    handleDeleteImage(
                                                        image,
                                                        deleteImage
                                                    )
                                                }
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
                                )
                            ) : currentCategory[key] ? ( // якщо це просто рядок
                                <li className="relative flex shadow-custom rounded-xl items-center">
                                    <img
                                        className="w-[200px] md:w-[250px] h-[200px] md:h-[250px] rounded-md object-cover"
                                        src={`http://localhost:5000${currentCategory[key]}`}
                                        alt="image"
                                    />
                                    <button
                                        onClick={() =>
                                            handleDeleteImage(
                                                currentCategory[key],
                                                key === "previewImage"
                                                    ? deletePreviewImage
                                                    : deleteBgImage
                                            )
                                        }
                                        className="absolute inset-0 flex items-center justify-center opacity-0 hover:bg-black/50 hover:opacity-100 rounded-md transition duration-300 ease-in-out backdrop-blur-[2px]"
                                    >
                                        <TrashIcon className="w-[70px] stroke-white" />
                                    </button>
                                </li>
                            ) : (
                                <div className="text-[22px] text-darkgray italic">
                                    [Зображення відсутнє]
                                </div>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryImagesModal;
