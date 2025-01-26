import Why1 from "../../assets/img/about/why1.jpg";

const Request = () => {
    return (
        <div>
            <div className="flex items-center justify-between py-[50px]">
                <hr className="w-[20%] border text-darkblue" />
                <h2 className="text-[70px] text-center uppercase font-semibold text-darkblue tracking-[1px] m-[50px]">
                    Зв&apos;яжіться з нами
                </h2>
                <hr className="w-[20%] border text-darkblue" />
            </div>
            <div className="text-center text-[24px]">
                <div>
                    <div className="text-[40px] text-main font-semibold ">
                        Маєте ідею або готовий проєкт?
                    </div>
                    <div className="text-darkgray">
                        Залиште заявку, і ми допоможемо втілити вашу мрію в
                        життя! Разом ми створимо меблі, які зроблять ваш простір
                        унікальним.
                    </div>

                    <div className="text-darkgray">
                        Ми завжди раді бачити вас у числі наших клієнтів!
                    </div>
                </div>
                <div className="flex justify-center items-center mt-[50px]">
                    <form
                        className="shadow-xl rounded-xl text-left w-[70%] h-[700px]"
                        action=""
                    >
                        <div className="flex justify-between h-full">
                            {/* Ліва частина з текстом і полями */}
                            <div className="flex flex-col p-[50px] gap-[50px]">
                                <h3 className="text-[50px] font-[300] text-main uppercase">
                                    Залишити заявку
                                </h3>
                                <div className="flex flex-col gap-[20px]">
                                    <div className="flex flex-col gap-[5px]">
                                        <label
                                            className="text-[18px] text-darkgray"
                                            htmlFor="firstName"
                                        >
                                            Ім&apos;я та прізвище:
                                        </label>
                                        <input
                                            className="border-b border-darkgray h-[50px] w-[450px]"
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-[10px]">
                                        <label
                                            className="text-[18px] text-darkgray"
                                            htmlFor="phone"
                                        >
                                            Номер телефону:
                                        </label>
                                        <input
                                            className="border-b border-darkgray h-[50px] w-[450px]"
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            pattern="[0-9]{10}"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-[10px]">
                                        <label
                                            className="text-[18px] text-darkgray"
                                            htmlFor="message"
                                        >
                                            Повідомлення:
                                        </label>
                                        <textarea
                                            className="border-b border-darkgray h-[50px] w-[450px]"
                                            id="message"
                                            name="message"
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <button className="border border-main text-main font-semibold rounded-xl px-[30px] py-[15px] hover:border-white hover:text-white hover:bg-main transition duration-300 ease-in-out">
                                    Відправити
                                </button>
                            </div>

                            {/* Права частина з картинкою */}
                            <div className="w-[50%] h-full">
                                <img
                                    className="w-full h-full object-cover rounded-r-xl"
                                    src={Why1}
                                    alt=""
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Request;
