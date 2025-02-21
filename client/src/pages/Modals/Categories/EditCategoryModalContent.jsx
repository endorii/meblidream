import TrashWhite from "../../../assets/svg/trash-white.svg";
import PlusWhite from "../../../assets/svg/plus-white.svg";
import MainButton from "../../ui/buttons/MainButton";

const EditCategoryModalContent = ({ onClose, currentCategory }) => {
    return (
        <div className="bg-white p-[20px] md:p-[40px] rounded-lg shadow-custom relative w-[95vw] h-[95vh] overflow-y-auto">
            <div className="relative flex flex-col gap-[20px] relative pt-[270px] max-[220px]:mt-[190px] sm:pt-[170px] md:pt-[130px] p-[10px] md:p-[30px]">
                <div className="fixed flex flex-col items-center gap-[10px] md:flex-row top-0 left-[48%] translate-x-[-49%] flex justify-between mt-[23px] w-[92vw] bg-white p-[30px] rounded-t-xl z-[10] shadow-custom">
                    <div className="text-center text-[24px] sm:text-[30px] font-semibold">
                        Редагування інформації категорії
                    </div>
                    <div className="flex justify-end gap-[10px]">
                        <MainButton onClick={onClose}>
                            Повернутися назад без змін
                        </MainButton>
                        <MainButton onClick={onClose}>
                            Зберегти зміни
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
                                defaultValue={currentCategory.displayName}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-[17px] font-bold">
                                Шлях
                            </label>
                            <input
                                type="text"
                                className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                                defaultValue={currentCategory.pathName}
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
                                defaultValue={currentCategory.filling.title}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-[17px] font-bold">
                                Підзаголовок
                            </label>
                            <input
                                type="text"
                                className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                                defaultValue={currentCategory.filling.subtitle}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-[17px] font-bold">
                                Опис
                            </label>
                            <textarea
                                className="p-[10px] border-b border-darkgray/20 focus:border-main h-[100px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                                defaultValue={
                                    currentCategory.filling.description
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[25px]">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Картинки
                    </h3>
                    <ul className="flex flex-wrap gap-[30px] items-center justify-center md:justify-start">
                        <li className="relative flex shadow-custom rounded-xl items-center">
                            <div
                                className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-md bg-gray/100 object-cover"
                                alt="{image}"
                            />
                            <button className="absolute inset-0 flex items-center justify-center hover:bg-black/30 rounded-md transition duration-300 ease-in-out">
                                <img
                                    className="w-[70px]"
                                    src={PlusWhite}
                                    alt="Trash"
                                />
                            </button>
                        </li>
                        {currentCategory.images.map((image, i) => (
                            <li
                                key={i}
                                className="relative flex shadow-custom rounded-xl items-center"
                            >
                                <img
                                    className="w-[200px] md:w-[250px] h-[200px] md:h-[250px] rounded-md object-cover"
                                    src={image}
                                    alt="{image}"
                                />
                                <button className="absolute inset-0 flex items-center justify-center opacity-0 hover:bg-black/50 hover:opacity-100 rounded-md transition duration-300 ease-in-out backdrop-blur-[2px]">
                                    <img
                                        className="w-[60px]"
                                        src={TrashWhite}
                                        alt="Trash"
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EditCategoryModalContent;
