import PreviewComponent from "./components/PreviewComponent";

const PreviewCategoryModalContent = ({ currentCategory }) => {
    return (
        <div className="bg-white p-[40px] rounded-lg shadow-lg relative w-[95vw] h-[95vh] overflow-y-auto">
            <PreviewComponent
                currentCategory={currentCategory}
            ></PreviewComponent>
        </div>
    );
};

export default PreviewCategoryModalContent;
