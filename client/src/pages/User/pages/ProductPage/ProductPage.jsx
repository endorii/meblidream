import Container from "../WelcomePage/components/Container";

const ProductPage = ({ category }) => {
    if (!category) {
        return (
            <div className="pt-[130px] text-center text-[50px]">
                Категорію не знайдено :(
            </div>
        );
    }

    return (
        <div className="pt-[70px]">
            <div className="relative">
                <img
                    className="w-[100vw] h-[40vh] object-cover"
                    src="https://colorit-mebel.od.ua/wp-content/uploads/2023/06/kuhni-na-zakaz-odessakuhnya-v-sovremennom-stile-1.jpg"
                    alt=""
                />
                <div className="absolute top-0 text-center w-full p-[50px] flex items-center justify-center h-full flex-col gap-[20px]">
                    <h2 className="mt-[0px] lg:mt-[40px] text-center lg:text-right font-bold text-[60px] lg:text-[120px] leading-[70px] lg:leading-[140px] text-white">
                        {category.displayName}
                    </h2>
                </div>
            </div>
            <Container>
                <div className="flex flex-col">
                    <div className="text-center w-full p-[50px] flex items-center justify-center h-full flex-col gap-[20px]">
                        <div className="text-4xl lg:text-5xl xl:text-[70px] font-medium leading-tight">
                            {category.filling.title}
                        </div>
                        <hr className="border-darkgray w-[10%] m-[20px]" />
                        <div className=" text-[20px] lg:text-[24px] w-[90%] font-[200]">
                            {category.filling.subtitle}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div
                            className="columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4"
                            style={{ columnGap: "20px" }}
                        >
                            {category.images.map((image, index) => (
                                <img
                                    key={index}
                                    className="w-full h-auto rounded-lg shadow-custom break-inside-avoid"
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className=" text-[20px] lg:text-[24px] text-center font-[200] m-[50px_20px] sm:m-[100px]">
                        {category.filling.description}
                    </div>
                    <button className="border border-main w-[90%] md:w-[40%] sm:w-[50%] xl:w-[30%] m-[0_auto] text-[24px] text-white bg-mainbg font-semibold rounded-xl px-[40px] py-[20px] hover:border-main hover:text-main hover:bg-whitebg transition duration-300 ease-in-out">
                        Залишити заявку
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default ProductPage;
