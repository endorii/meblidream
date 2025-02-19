import MainButton from "../ui/buttons/MainButton";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex justify-center items-center h-[90vh]">
            <div className="shadow-custom p-[50px] w-[90%] sm:w-[75%] md:w-[65%] xl:w-[40%]">
                <div>
                    <div className="text-[26px]">
                        Вітаємо в{" "}
                        <span className="font-bold text-main">
                            Mebli Dream Admin
                        </span>
                    </div>
                    <form className="mt-6 flex flex-col gap-[20px] pt-[20px]">
                        <div className="flex flex-col gap-[8px]">
                            <label className="text-[17px] font-bold">
                                Логін
                            </label>
                            <input
                                type="text"
                                placeholder="Ваш логін"
                                className="border-b-2 text-[18px] outline-none focus:border-main border-gray p-2 w-full h-[60px] transition duration-300 ease-in-out"
                            />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <label className="text-[17px] font-bold">
                                Пароль
                            </label>
                            <input
                                type="password"
                                placeholder="Ваш пароль"
                                className="border-b-2 text-[18px] outline-none focus:border-main border-gray p-2 w-full h-[60px] transition duration-300 ease-in-out"
                            />
                        </div>
                        <MainButton bonusStyles="h-[65px]">Увійти</MainButton>
                        <Link to="/" className="underline text-darkgray/70">
                            Повернутися назад
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
