import MainButton from "../../ui/buttons/MainButton";

const EditCategoryModalContent = ({ onClose, currentCategory }) => {
    return (
        <div className="bg-white rounded-lg shadow-custom relative w-[95vw] sm:w-[75vw] md:w-[60vw] h-[95vh] overflow-y-auto">
            <div className="flex items-center flex-col justify-center lg:flex-row lg:justify-between p-[20px] sm:p-[40px] shadow-custom gap-[10px]">
                <div className="text-[24px] sm:text-[30px] font-semibold">
                    Редагування інформації категорії
                </div>
                <div className="flex justify-end gap-[10px]">
                    <MainButton onClick={onClose}>
                        Повернутися назад без змін
                    </MainButton>
                    <MainButton onClick={onClose}>Зберегти зміни</MainButton>
                </div>
            </div>
            <div className="flex flex-col gap-[20px] p-[40px]">
                <div className="flex justify-between flex-col gap-[30px]">
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
                        <label className="text-[17px] font-bold">Шлях</label>
                        <input
                            type="text"
                            className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                            defaultValue={currentCategory.pathName}
                        />
                    </div>

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
                        <label className="text-[17px] font-bold">Опис</label>
                        <textarea
                            className="p-[10px] border-b border-darkgray/20 focus:border-main h-[100px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                            defaultValue={currentCategory.filling.description}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCategoryModalContent;
