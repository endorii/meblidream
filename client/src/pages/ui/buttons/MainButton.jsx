const MainButton = ({
    isDisabled = false,
    bonusStyles = "",
    onClick = () => {},
    children,
}) => {
    return (
        <button
            disabled={isDisabled}
            className={`${bonusStyles} border border-transparent text-center text-white font-semibold rounded-xl px-[20px] py-[13px] hover:border-main hover:text-main hover:bg-whitebg bg-mainbg disabled:text-darkgray/50 disabled:bg-disabledbg disabled:border-white disabled:cursor-not-allowed group transition duration-300 ease-in-out`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default MainButton;
