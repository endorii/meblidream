import Why1 from "../../assets/img/about/why1.jpg";
import OrderModalForm from "../Modals/Orders/components/OrderModalForm";
import TitleCentered from "../ui/TitleCentered";

const Request = () => {
    return (
        <div>
            <TitleCentered title={"Зв'яжіться з нами"} />
            <div className="text-center flex flex-col items-center text-[24px] px-[15px] md:px-[30px]">
                <div className="flex flex-col">
                    <div className="text-[35px] md:text-[40px] text-main font-semibold ">
                        Маєте ідею або готовий проєкт?
                    </div>
                    <div className="text-[18px] sm:text-[20px] mt-[10px] text-darkgray">
                        Залиште заявку, і ми допоможемо втілити вашу мрію в
                        життя! Разом ми створимо меблі, які зроблять ваш простір
                        унікальним.
                    </div>
                    <hr className="m-[25px] self-center border-main border w-[20%]" />
                    <div className="text-darkgray">
                        Ми завжди раді бачити вас у числі наших клієнтів!
                    </div>
                </div>
                <div className="flex text-left justify-center w-[95%] sm:w-[80%] md:w-[65%] mt-[50px] p-[20px] gap-[20px] shadow-custom rounded-xl ">
                    <OrderModalForm />
                    <img
                        className="h-[600px] hidden lg:block lg:w-[40%] object-cover rounded-xl "
                        src={Why1}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Request;
