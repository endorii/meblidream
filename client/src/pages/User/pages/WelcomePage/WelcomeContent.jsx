import Top from "./components/Top";
import Products from "./components/Products";
import Process from "./components/Process";
// import Partners from "./components/Partners";
import Advantages from "./components/Advantages";

const WelcomeContent = ({ setIsOrderModalOpen }) => {
    return (
        <>
            <Top />
            <Products setIsOrderModalOpen={setIsOrderModalOpen} />
            <Process />
            {/* <Partners></Partners> */}
            <Advantages />
        </>
    );
};

export default WelcomeContent;
