const Container = ({ children }) => {
    return (
        <div className="py-[10px] px-[15px] md:py-[20px] md:px-[30px] xl:py-[50px] xl:px-[100px]">
            {children}
        </div>
    );
};

export default Container;
