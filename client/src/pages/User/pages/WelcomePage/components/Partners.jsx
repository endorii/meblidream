import Container from "./Container";
import KronospanLogo from "../../../../../assets/img/partners/kronospan.png";
import AgtLogo from "../../../../../assets/img/partners/agt.png";
import AlvicLogo from "../../../../../assets/img/partners/alvic.png";
import BlumLogo from "../../../../../assets/img/partners/blum.svg";
import EggerLogo from "../../../../../assets/img/partners/egger.png";
import GtvLogo from "../../../../../assets/img/partners/gtv.png";
import HettichLogo from "../../../../../assets/img/partners/hettich.svg";
import LuxformLogo from "../../../../../assets/img/partners/luxform.png";
import SwisspanLogo from "../../../../../assets/img/partners/swisspan.jpg";
import TitleCentered from "../../../../ui/TitleCentered";

const Partners = () => {
    const partners = [
        KronospanLogo,
        AgtLogo,
        AlvicLogo,
        BlumLogo,
        EggerLogo,
        GtvLogo,
        HettichLogo,
        LuxformLogo,
        SwisspanLogo,
    ];

    return (
        <>
            <Container>
                <TitleCentered title={"Наші партнери"} />
            </Container>
            <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-scroll-left gap-[100px]">
                    {[...partners, ...partners].map((partner, i) => (
                        <img
                            key={i}
                            className="h-[45px] md:h-[90px] w-[150px] md:w-[230px] grayscale hover:grayscale-0 cursor-pointer object-contain transition duration-300 ease-in-out"
                            src={partner}
                            alt="partner logo"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Partners;
