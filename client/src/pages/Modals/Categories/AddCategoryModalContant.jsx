import { useState } from "react";
import MainButton from "../../ui/buttons/MainButton";
import { addCategory } from "../../../actions/categories.actions";
import { fetchCategories } from "../../../store/slices/categories.slice";
import { useDispatch } from "react-redux";

const AddCategoryModalContent = ({ onClose }) => {
    const dispatch = useDispatch();

    const [displayName, setDisplayName] = useState("");
    const [pathName, setPathName] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");

    const handleChange = (value, setValue) => {
        setValue(value);
    };

    return (
        <div className="bg-white p-[20px] md:p-[40px] rounded-lg shadow-custom relative w-[95vw] h-[95vh] overflow-y-auto">
            <div className="relative flex flex-col gap-[20px] relative pt-[270px] max-[220px]:mt-[190px] sm:pt-[170px] md:pt-[130px] p-[10px] md:p-[30px]">
                <div className="fixed flex flex-col items-center gap-[10px] md:flex-row top-0 left-[48%] translate-x-[-49%] flex justify-between mt-[23px] w-[92vw] bg-white p-[30px] rounded-t-xl z-[10] shadow-custom">
                    <div className="text-center text-[24px] sm:text-[30px] font-semibold">
                        Додавання категорії
                    </div>
                    <div className="flex justify-end gap-[10px]">
                        <MainButton onClick={onClose}>
                            Повернутися назад
                        </MainButton>
                        <MainButton
                            onClick={async () => {
                                onClose();
                                await addCategory(
                                    displayName,
                                    pathName,
                                    title,
                                    subtitle,
                                    description
                                );
                                dispatch(fetchCategories());
                            }}
                        >
                            Додати категорію
                        </MainButton>
                    </div>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                    <div className="w-full md:w-[45%] flex flex-col gap-[30px]">
                        <div className="flex flex-col">
                            <label className="text-[17px] font-bold">
                                Відображувана назва
                            </label>
                            <input
                                type="text"
                                className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                                onChange={(e) =>
                                    handleChange(e.target.value, setDisplayName)
                                }
                                value={displayName}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-[17px] font-bold">
                                Шлях
                            </label>
                            <input
                                type="text"
                                className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                                onChange={(e) =>
                                    handleChange(e.target.value, setPathName)
                                }
                                value={pathName}
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-[45%] flex flex-col gap-[30px]">
                        <div className="flex flex-col">
                            <label className="text-[17px] font-bold">
                                Заголовок
                            </label>
                            <input
                                type="text"
                                className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                                onChange={(e) =>
                                    handleChange(e.target.value, setTitle)
                                }
                                value={title}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-[17px] font-bold">
                                Підзаголовок
                            </label>
                            <input
                                type="text"
                                className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                                onChange={(e) =>
                                    handleChange(e.target.value, setSubtitle)
                                }
                                value={subtitle}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-[17px] font-bold">
                                Опис
                            </label>
                            <textarea
                                className="p-[10px] border-b border-darkgray/20 focus:border-main h-[100px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                                onChange={(e) =>
                                    handleChange(e.target.value, setDescription)
                                }
                                value={description}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCategoryModalContent;
