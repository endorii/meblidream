const DeleteOrderModalContent = ({ onClose }) => {
    return (
        <div className="bg-white p-[40px] rounded-lg shadow-lg relative w-[40vw]">
            <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[10px]">
                    <h2 className="text-[30px] font-semibold">
                        Ви впевнені, що бажаєте видалити це замовлення?
                    </h2>
                    <p className="text-[18px] mt-[10px] text-darkgray">
                        Дані будуть повністю очищенні, без можливості
                        повернення!
                    </p>
                </div>
                <div className="flex justify-end gap-[10px]">
                    <button
                        className="border border-main text-main font-semibold rounded-xl px-[30px] py-[12px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out"
                        onClick={onClose}
                    >
                        Відміна
                    </button>
                    <button className="border border-main text-main font-semibold rounded-xl px-[30px] py-[12px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                        Видалити
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrderModalContent;
