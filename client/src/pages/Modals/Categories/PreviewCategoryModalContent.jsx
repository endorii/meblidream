import ProductPage from "../../User/pages/ProductPage/ProductPage";
import MainButton from "../../ui/buttons/MainButton";

import ArrowLeftIcon from "../../../assets/svg/arrow-left.svg?react";

const PreviewCategoryModalContent = ({ currentCategory, onClose }) => {
    return (
        <div className="relative bg-white p-[0px] rounded-lg shadow-custom relative w-[95vw] h-[95vh] overflow-y-auto relative">
            <div className="absolute top-[10px] left-[10px]">
                <MainButton
                    bonusStyles="fixed z-[50] group flex gap-[10px] items-center"
                    onClose={onClose}
                >
                    <ArrowLeftIcon className="w-[25px] stroke-white group-hover:stroke-main" />
                    Повернутися назад
                </MainButton>
            </div>
            <ProductPage category={currentCategory} />
        </div>
    );
};

export default PreviewCategoryModalContent;
