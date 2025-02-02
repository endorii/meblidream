import TrashWhite from "../../../assets/svg/trash-white.svg";
import PlusBlue from "../../../assets/svg/plus-blue.svg";
import PlusWhite from "../../../assets/svg/plus-white.svg";

const EditCategoryModalContent = ({ onClose, currentCategory }) => {
    return (
        <div className="bg-white p-[40px] rounded-lg shadow-lg relative w-[95vw] h-[95vh] overflow-y-auto">
            <div className="relative flex flex-col gap-[20px] relative pt-[100px] p-[30px]">
                <div className="fixed top-[0px] left-[50%] translate-x-[-50%] flex justify-between mt-[22px] w-[93vw] bg-white p-[30px] rounded-xl">
                    <div className="text-center text-[30px] font-semibold">
                        Редагування інформації категорії
                    </div>
                    <div className="flex justify-end gap-[10px]">
                        <button
                            className="border border-main text-main font-semibold rounded-xl px-[30px] py-[12px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out"
                            onClick={() => {
                                onClose();
                            }}
                        >
                            Повернутися назад без змін
                        </button>
                        <button className="border border-main text-main font-semibold rounded-xl px-[30px] py-[12px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                            Зберегти зміни
                        </button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[45%] flex flex-col gap-[25px]">
                        <div>
                            <label className="text-[17px] font-bold">
                                Відображувана назва
                            </label>
                            <input
                                type="text"
                                className="border-b-2 text-[20px] outline-none focus:border-main border-gray p-2 w-full h-[60px] transition duration-300 ease-in-out"
                                defaultValue={currentCategory.displayName}
                            />
                        </div>

                        <div>
                            <label className="text-[17px] font-bold">
                                Шлях
                            </label>
                            <input
                                type="text"
                                className="border-b-2 text-[20px] outline-none focus:border-main border-gray p-2 w-full h-[60px] transition duration-300 ease-in-out"
                                defaultValue={currentCategory.pathName}
                            />
                        </div>
                    </div>

                    <div className="w-[45%] flex flex-col gap-[25px]">
                        <div>
                            <label className="text-[17px] font-bold">
                                Заголовок
                            </label>
                            <input
                                type="text"
                                className="border-b-2 text-[20px] outline-none focus:border-main border-gray p-2 w-full h-[60px] transition duration-300 ease-in-out"
                                defaultValue={currentCategory.filling.title}
                            />
                        </div>

                        <div>
                            <label className="text-[17px] font-bold">
                                Підзаголовок
                            </label>
                            <input
                                type="text"
                                className="border-b-2 text-[20px] outline-none focus:border-main border-gray p-2 w-full h-[60px] transition duration-300 ease-in-out"
                                defaultValue={currentCategory.filling.subtitle}
                            />
                        </div>

                        <div>
                            <label className="text-[17px] font-bold">
                                Опис
                            </label>
                            <textarea
                                className="border-b-2 text-[20px] outline-none focus:border-main border-gray p-2 w-full h-[150px] transition duration-300 ease-in-out"
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
                    <ul className="flex flex-wrap gap-[30px]">
                        <li className="relative flex shadow-xl rounded-xl items-center">
                            <div
                                className="w-[250px] h-[250px] rounded-md bg-gray/100 object-cover"
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
                                className="relative flex shadow-xl rounded-xl items-center"
                            >
                                <img
                                    className="w-[250px] h-[250px] rounded-md object-cover"
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
