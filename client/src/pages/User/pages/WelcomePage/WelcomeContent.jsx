import Top from "./components/Top";
import Products from "./components/Products";
import Process from "./components/Process";
import Partners from "./components/Partners";
import Advantages from "./components/Advantages";
import { useSelector } from "react-redux";

const WelcomeContent = () => {
    const { categories } = useSelector((state) => state.categories);
    return (
        <>
            <Top />
            {categories.length > 0 ? <Products /> : null}
            <Process />
            <Partners />
            <Advantages />
        </>
    );
};

export default WelcomeContent;
