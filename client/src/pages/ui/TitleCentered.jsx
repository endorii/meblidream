const TitleCentered = ({ title }) => {
    return (
        <div className="flex items-center justify-between">
            <hr className="w-[20%] border text-darkblue" />
            <h2 className="text-[35px] sm:text-[50px] lg:text-[70px] text-center uppercase font-semibold text-darkblue tracking-[1px] my-[40px] lg:my-[80px]">
                {title}
            </h2>
            <hr className="w-[20%] border text-darkblue" />
        </div>
    );
};

export default TitleCentered;
