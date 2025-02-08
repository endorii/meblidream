const Title = ({ title }) => {
    return (
        <div className="flex items-center justify-between w-full flex-col sm:flex-row">
            <h2 className="text-center text-[35px] sm:text-[50px] sm:text-left lg:text-[70px] uppercase font-semibold text-darkblue tracking-[1px] my-[40px] lg:my-[80px]">
                {title}
            </h2>
            <hr className=" w-[30%] border text-darkblue" />
        </div>
    );
};

export default Title;
