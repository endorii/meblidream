import Container from "./Container";
import Alta from "../../../../../assets/img/logo_alta.png";
import Madot from "../../../../../assets/img/logo_madot.png";
import Velam from "../../../../../assets/img/logo_velam.png";
import Viyar from "../../../../../assets/img/logo_viyar.png";

const Partners = () => {
    return (
        <>
            <Container>
                <div className="flex items-center justify-between">
                    <hr className="w-[30%] border text-darkblue" />
                    <h2 className="text-[70px] text-center uppercase font-semibold text-darkblue tracking-[1px] m-[50px]">
                        Наші партнери
                    </h2>
                    <hr className="w-[30%] border text-darkblue" />
                </div>
                <div className="flex gap-[8%] justify-center items-center m-[30px]">
                    <img
                        className="h-[100px] w-[230px] grayscale hover:grayscale-0 cursor-pointer object-contain transition duration-300 ease-in-out"
                        src={Alta}
                        alt=""
                    />
                    <img
                        className="h-[100px] w-[230px] grayscale hover:grayscale-0 cursor-pointer object-contain transition duration-300 ease-in-out"
                        src={Madot}
                        alt=""
                    />
                    <img
                        className="h-[100px] w-[230px] grayscale hover:grayscale-0 cursor-pointer object-contain transition duration-300 ease-in-out"
                        src={Velam}
                        alt=""
                    />
                    <img
                        className="h-[100px] w-[230px] grayscale hover:grayscale-0 cursor-pointer object-contain transition duration-300 ease-in-out"
                        src={Viyar}
                        alt=""
                    />
                </div>
            </Container>
        </>
    );
};

export default Partners;
