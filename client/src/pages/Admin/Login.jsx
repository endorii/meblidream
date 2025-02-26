import { useForm } from "react-hook-form";
import MainButton from "../ui/buttons/MainButton";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import EyeCloseIcon from "../../assets/svg/eyeclose.svg?react";
import EyeOpenIcon from "../../assets/svg/eyeopen.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { auth, login } from "../../actions/auth.actions";
import { Toaster } from "react-hot-toast";

const Login = () => {
    const dispatch = useDispatch();
    const [passVisible, setPassVisible] = useState(false);
    const isAuth = useSelector((state) => state.user.isAuth);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { isValid, errors },
    } = useForm({
        mode: "onTouched",
    });

    const onSubmit = async (data) => {
        try {
            await dispatch(login(data.loginName, data.loginPassword));
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        dispatch(auth());
        if (isAuth) {
            navigate("/admin");
        }
    }, [isAuth]);

    return (
        <>
            <Toaster position="bottom-right" reverseOrder={false} />
            <div className="flex justify-center items-center h-[90vh]">
                <div className="shadow-custom p-[50px] w-[90%] sm:w-[75%] md:w-[65%] xl:w-[40%]">
                    <div>
                        <div className="text-[26px]">
                            Вітаємо в{" "}
                            <span className="font-bold text-main">
                                Mebli Dream Admin
                            </span>
                        </div>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-6 flex flex-col gap-[30px] pt-[20px]"
                        >
                            <div className="flex flex-col">
                                <label className="text-[17px] font-bold">
                                    Логін *
                                </label>
                                <input
                                    type="text"
                                    className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                                    {...register("loginName", {
                                        required: "це поле обов'язкове",
                                    })}
                                />
                                {errors.loginName && (
                                    <span className="text-red mt-[5px] text-sm">
                                        {errors.loginName.message}
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[17px] font-bold">
                                    Пароль *
                                </label>
                                <div className="flex">
                                    <input
                                        type={passVisible ? "text" : "password"}
                                        className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out w-full"
                                        {...register("loginPassword", {
                                            required: "це поле обов'язкове",
                                        })}
                                    />
                                    {!passVisible ? (
                                        <EyeCloseIcon
                                            onClick={() => {
                                                setPassVisible(!passVisible);
                                            }}
                                            className={`w-[35px] fill-black ml-[15px]`}
                                        />
                                    ) : (
                                        <EyeOpenIcon
                                            onClick={() => {
                                                setPassVisible(!passVisible);
                                            }}
                                            className={`w-[35px] stroke-black ml-[15px]`}
                                        />
                                    )}
                                </div>
                                {errors.loginPassword && (
                                    <span className="text-red mt-[5px] text-sm">
                                        {errors.loginPassword.message}
                                    </span>
                                )}
                            </div>
                            <MainButton
                                isDisabled={!isValid}
                                bonusStyles="h-[65px]"
                            >
                                Увійти
                            </MainButton>
                            <Link to="/" className="underline text-darkgray/70">
                                Повернутися назад
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
