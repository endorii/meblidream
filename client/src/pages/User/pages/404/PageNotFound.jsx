import { Link } from "react-router-dom";
import SecondaryButton from "../../../ui/buttons/SecondaryButton";

const PageNotFound = () => {
    return (
        <div className="bg-mainbg bg-repeat bg-center bg-cover h-screen w-full flex flex-col gap-[20px]  items-center justify-center">
            <div className="text-[300px] font-bold text-white leading-[250px]">
                404
            </div>

            <div className="text-[40px] text-white">Сторінку не знайдено</div>
            <Link to={"/"}>
                <SecondaryButton>На головну</SecondaryButton>
            </Link>
        </div>
    );
};

export default PageNotFound;
