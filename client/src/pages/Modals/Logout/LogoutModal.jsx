import MainButton from "../../ui/buttons/MainButton";

const LogoutModal = ({ onClose, onAction }) => {
    return (
        <div className="bg-white p-[20px] md:p-[40px] rounded-lg shadow-custom relative w-[90vw] md:w-[50vw] xl:w-[25vw]">
            <div className="flex flex-col gap-[20px] md:gap-[40px]">
                <div className="flex flex-col md:gap-[10px]">
                    <h2 className="text-[20px] md:text-[30px] text-center font-semibold">
                        Ви впевнені, що бажаєте вийти?
                    </h2>
                </div>
                <div className="flex justify-center gap-[10px] mt-[10px] w-full">
                    <MainButton bonusStyles="w-[40%]" onClose={onClose}>
                        Відміна
                    </MainButton>
                    <MainButton bonusStyles="w-[40%]" onAction={onAction}>
                        Вийти
                    </MainButton>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
