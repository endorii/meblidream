const SecondaryButton = ({
    bonusStyles = "",
    onClick = () => {},
    children,
}) => {
    return (
        <button
            className={`${bonusStyles} bg-whitebg border border-main text-main font-semibold rounded-xl px-[20px] py-[13px] hover:border-transparent hover:text-white hover:bg-mainbg transition duration-300 ease-in-out`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default SecondaryButton;
