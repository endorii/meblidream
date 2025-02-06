import { Link } from "react-router-dom";
import BGImage from "../../../../../assets/img/bg.jpg";

const Top = () => {
    return (
        <>
            <div className="relative">
                <img
                    src={BGImage}
                    alt=""
                    className=" pt-[70px] w-[100vw] h-[100vh] object-cover"
                />
                <div className="absolute top-[25px] sm:top-[50px] right-0 px-[10px] pt-[70px] md:p-[100px] flex flex-col items-center">
                    <h1 className="mt-[0px] lg:mt-[40px] text-center lg:text-right font-bold text-[90px] lg:text-[120px] leading-[90px] lg:leading-[140px] text-white">
                        Mebli Dream
                    </h1>
                    <hr className="text-white border-[1px] w-[70%] mb-[10px] mr-[5px]" />
                    <div className="text-center lg:text-right text-[20px] lg:text-[24px] text-white font-[300]">
                        створюємо меблі вашої мрії з турботою про кожну деталь!
                    </div>
                </div>
                <Link to="/products/kukhni">
                    <button className="absolute bottom-[32%] right-[9%] border-2 border-white text-white text-[14px] sm:text-[16px] font-semibold rounded-xl p-[10px] sm:p-[15px] hover:border-transperent hover:text-black hover:bg-white transition duration-300 ease-in-out">
                        Замовити кухню
                    </button>
                </Link>
                <Link to="/products/shafy">
                    <button className="absolute bottom-[48%] right-[30%] border-2 border-white text-white text-[14px] sm:text-[16px] font-semibold rounded-xl p-[10px] sm:p-[15px] hover:border-transperent hover:text-black hover:bg-white transition duration-300 ease-in-out">
                        Замовити шафу
                    </button>
                </Link>
                <Link to="/products">
                    <button className="absolute bottom-[18%] right-[63%] border-2 border-white text-white text-[14px] sm:text-[16px] font-semibold rounded-xl p-[10px] sm:p-[15px] hover:border-transperent hover:text-black hover:bg-white transition duration-300 ease-in-out">
                        Замовити інші меблі
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Top;
