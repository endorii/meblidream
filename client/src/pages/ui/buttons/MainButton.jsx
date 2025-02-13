const MainButton = ({
    bonusStyles = "",
    onClose = () => {
        return null;
    },
    children,
}) => {
    return (
        <button
            className={`${bonusStyles} border border-transperent text-center text-white font-semibold rounded-xl px-[20px] py-[13px] hover:border-main hover:text-main hover:bg-whitebg bg-mainbg group transition duration-300 ease-in-out`}
            onClick={onClose}
        >
            {children}
        </button>
    );
};

export default MainButton;
