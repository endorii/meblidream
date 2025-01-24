import Container from "./Container";
import Contact from "../../../assets/img/contact.jpg";

const Contacts = () => {
    return (
        <div>
            <Container>
                <div className="flex items-center justify-between">
                    <h2 className="text-[70px] uppercase font-semibold text-darkblue tracking-[1px] mx-[50px]">
                        Замовлення / контакти
                    </h2>
                    <hr className="w-[40%] border text-darkblue" />
                </div>
            </Container>

            <div className="">
                <div className="">
                    <img
                        className="w-[60%] h-[600px] object-cover rounded-r-xl object-[]"
                        src={Contact}
                        alt=""
                    />
                    <div>Наша контактна інформація</div>
                </div>
                <div>
                    <form action=""></form>
                </div>
            </div>

            <div>
                <div className="text-center mt-[20px] text-main text-[50px] font-bold font-[Caveat,_serif]">
                    Чекаємо на Ваc ;)
                </div>
            </div>
        </div>
    );
};

export default Contacts;
