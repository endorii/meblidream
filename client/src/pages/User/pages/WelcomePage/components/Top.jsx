import BGImage from "../../../../../assets/img/bg.jpg";

const Top = () => {
    console.log(BGImage);
    return (
        <>
            <div className="relative">
                <img src={BGImage} alt="" className=" pt-[80px] w-[100vw]" />
                <div className="absolute top-[50px] right-0 p-[100px] flex flex-col items-end">
                    <h1 className="mt-[40px] text-right font-bold text-[120px] leading-[140px] text-white">
                        Mebli Dream
                    </h1>
                    <hr className="text-white border-[1px] w-[70%] mb-[10px] mr-[5px]" />
                    <div className="text-right text-[24px] text-white font-[300]">
                        створюємо меблі вашої мрії з турботою про кожну деталь!
                    </div>
                </div>
                <button className="absolute bottom-[32%] right-[9%] border-2 border-white text-white font-semibold rounded-xl p-[15px] hover:border-transperent hover:text-black hover:bg-white transition duration-300 ease-in-out">
                    Замовити кухню
                </button>
                <button className="absolute bottom-[48%] right-[30%] border-2 border-white text-white font-semibold rounded-xl p-[15px] hover:border-transperent hover:text-black hover:bg-white transition duration-300 ease-in-out">
                    Замовити шафу
                </button>
                <button className="absolute bottom-[18%] right-[63%] border-2 border-white text-white font-semibold rounded-xl p-[15px] hover:border-transperent hover:text-black hover:bg-white transition duration-300 ease-in-out">
                    Замовити інші меблі
                </button>
            </div>
        </>
    );
};

export default Top;
