import SecondaryButton from "../../ui/buttons/SecondaryButton";

const DeleteModalContent = ({ title, onClose }) => {
    return (
        <div className="bg-white p-[40px] rounded-lg shadow-custom relative w-[40vw]">
            <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[10px]">
                    <h2 className="text-[30px] font-semibold">
                        Ви впевнені, що бажаєте видалити {title}?
                    </h2>
                    <p className="text-[18px] mt-[10px] text-darkgray">
                        Дані будуть повністю очищенні, без можливості
                        повернення!
                    </p>
                </div>
                <div className="flex justify-end gap-[10px]">
                    <SecondaryButton onClose={onClose}>Відміна</SecondaryButton>
                    <SecondaryButton onClose={onClose}>
                        Видалити
                    </SecondaryButton>
                </div>
            </div>
        </div>
    );
};

export default DeleteModalContent;
