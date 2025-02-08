import Container from "../WelcomePage/components/Container";

import WhyUsSection from "./components/WhyUsSection";
import WhatWeOffer from "./components/WhatWeOffer";
import AboutTop from "./components/AboutTop";

const About = () => {
    return (
        <div className="pt-[80px]">
            <Container>
                <AboutTop />
                <WhyUsSection />
                <WhatWeOffer />
            </Container>
        </div>
    );
};

export default About;
