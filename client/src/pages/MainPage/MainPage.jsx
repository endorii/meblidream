import Advantages from "./components/Advantages";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Process from "./components/Process";
import Products from "./components/Products";
import Top from "./components/Top";

const MainPage = () => {
    return (
        <>
            <Header></Header>
            <Top></Top>
            <Products></Products>
            <Process></Process>
            <Advantages></Advantages>
            <Partners></Partners>
            <Contacts></Contacts>
            <Footer></Footer>
        </>
    );
};

export default MainPage;
