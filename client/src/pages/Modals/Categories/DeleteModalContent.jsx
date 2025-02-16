import MainButton from "../../ui/buttons/MainButton";

const DeleteModalContent = ({ title, onClose }) => {
    return (
        <div className="bg-white p-[25px] md:p-[40px] rounded-lg shadow-custom relative w-[90vw] md:w-[50vw] xl:w-[40vw]">
            <div className="flex flex-col gap-[20px] md:gap-[40px]">
                <div className="flex flex-col md:gap-[10px]">
                    <h2 className="text-[20px] md:text-[30px] font-semibold">
                        Ви впевнені, що бажаєте видалити{" "}
                        <span className="text-main">{title}</span>?
                    </h2>
                    <p className="text-[14px] md:text-[18px] mt-[10px] text-darkgray">
                        Дані будуть повністю очищенні, без можливості
                        повернення!
                    </p>
                </div>
                <div className="flex justify-center md:justify-end gap-[10px] mt-[10px]">
                    <MainButton onClose={onClose}>Відміна</MainButton>
                    <MainButton onClose={onClose}>Видалити</MainButton>
                </div>
            </div>
        </div>
    );
};

export default DeleteModalContent;
