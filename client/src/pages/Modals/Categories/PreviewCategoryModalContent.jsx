import ProductPage from "../../User/pages/ProductPage/ProductPage";

const PreviewCategoryModalContent = ({ currentCategory }) => {
    return (
        <div className="bg-white p-[40px] rounded-lg shadow-custom relative w-[95vw] h-[95vh] overflow-y-auto">
            <ProductPage category={currentCategory} />
        </div>
    );
};

export default PreviewCategoryModalContent;
