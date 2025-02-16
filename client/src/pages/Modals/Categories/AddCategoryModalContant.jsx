import { useState } from "react";
import MainButton from "../../ui/buttons/MainButton";

const AddCategoryModalContent = ({ onClose }) => {
    const [name, setName] = useState("");
    const [path, setPath] = useState("");
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
                        Редагування інформації категорії
                    </div>
                    <div className="flex justify-end gap-[10px]">
                        <MainButton onClose={onClose}>
                            Повернутися назад
                        </MainButton>
                        <MainButton onClose={onClose}>
                            Додати категорію
                        </MainButton>
                    </div>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                    <div className="w-full md:w-[45%] flex flex-col gap-[25px]">
                        <div>
                            <label className="text-[17px] font-bold">
                                Відображувана назва
                            </label>
                            <input
                                type="text"
                                className="border-b-2 text-[16px] md:text-[20px] outline-none focus:border-main border-gray p-2 w-full h-[60px] transition duration-300 ease-in-out"
                                placeholder="Введіть назву"
                                onChange={(e) =>
                                    handleChange(e.target.value, setName)
                                }
                                value={name}
                            />
                        </div>

                        <div>
                            <label className="text-[17px] font-bold">
                                Шлях
                            </label>
                            <input
                                type="text"
                                className="border-b-2 text-[16px] md:text-[20px] outline-none focus:border-main border-gray p-2 w-full h-[60px] transition duration-300 ease-in-out"
                                placeholder="Введіть шлях"
                                onChange={(e) =>
                                    handleChange(e.target.value, setPath)
                                }
                                value={path}
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-[45%] flex flex-col gap-[25px]">
                        <div>
                            <label className="text-[17px] font-bold">
                                Заголовок
                            </label>
                            <input
                                type="text"
                                className="border-b-2 text-[16px] md:text-[20px] outline-none focus:border-main border-gray p-2 w-full h-[60px] transition duration-300 ease-in-out"
                                placeholder="Введіть заголовок"
                                onChange={(e) =>
                                    handleChange(e.target.value, setTitle)
                                }
                                value={title}
                            />
                        </div>

                        <div>
                            <label className="text-[17px] font-bold">
                                Підзаголовок
                            </label>
                            <input
                                type="text"
                                className="border-b-2 text-[16px] md:text-[20px] outline-none focus:border-main border-gray p-2 w-full h-[60px] transition duration-300 ease-in-out"
                                placeholder="Введіть підзаголовок"
                                onChange={(e) =>
                                    handleChange(e.target.value, setSubtitle)
                                }
                                value={subtitle}
                            />
                        </div>

                        <div>
                            <label className="text-[17px] font-bold">
                                Опис
                            </label>
                            <textarea
                                className="border-b-2 text-[16px] md:text-[20px] outline-none focus:border-main border-gray p-2 w-full h-[150px] transition duration-300 ease-in-out"
                                placeholder="Введіть опис"
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
