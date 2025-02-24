import MainButton from "../../ui/buttons/MainButton";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editCategory } from "../../../actions/categories.actions";
import { fetchCategories } from "../../../store/slices/categories.slice";

const EditCategoryModalContent = ({ onClose, currentCategory }) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: "onTouched",
        defaultValues: {
            displayName: currentCategory.displayName,
            pathName: currentCategory.pathName,
            title: currentCategory.filling?.title,
            subtitle: currentCategory.filling?.subtitle,
            description: currentCategory.filling?.description,
        },
    });

    const onSubmit = async (data) => {
        await editCategory(
            currentCategory._id,
            data.displayName,
            data.pathName,
            data.title,
            data.subtitle,
            data.description
        );
        dispatch(fetchCategories());
        onClose();
        reset();
    };

    return (
        <form
            className="bg-white rounded-lg shadow-custom relative w-[95vw] sm:w-[75vw] md:w-[60vw] h-[95vh] overflow-y-auto"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex items-center flex-col justify-center lg:flex-row lg:justify-between p-[20px] sm:p-[40px] shadow-custom gap-[10px]">
                <div className="text-[24px] sm:text-[30px] font-semibold">
                    Редагування інформації категорії
                </div>
                <div className="flex justify-end gap-[10px]">
                    <MainButton onClick={onClose}>
                        Повернутися назад без змін
                    </MainButton>
                    <MainButton type="submit" isDisabled={!isValid}>
                        Зберегти зміни
                    </MainButton>
                </div>
            </div>
            <div className="flex flex-col gap-[20px] p-[40px]">
                <div className="flex justify-between flex-col gap-[30px]">
                    <div className="flex flex-col">
                        <label className="text-[17px] font-bold">
                            Відображувана назва *
                        </label>
                        <input
                            type="text"
                            className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                            {...register("displayName", {
                                required: "Це поле обов'язкове",
                            })}
                        />
                        {errors.displayName && (
                            <span className="text-red mt-[5px] text-sm">
                                {errors.displayName.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[17px] font-bold">Шлях *</label>
                        <input
                            type="text"
                            className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                            {...register("pathName", {
                                required: "Це поле обов'язкове",
                            })}
                        />
                        {errors.pathName && (
                            <span className="text-red mt-[5px] text-sm">
                                {errors.pathName.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[17px] font-bold">
                            Заголовок
                        </label>
                        <input
                            type="text"
                            className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                            {...register("title")}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[17px] font-bold">
                            Підзаголовок
                        </label>
                        <input
                            type="text"
                            className="p-[10px] border-b border-darkgray/20 focus:border-main h-[50px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                            {...register("subtitle")}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[17px] font-bold">Опис</label>
                        <textarea
                            className="p-[10px] border-b border-darkgray/20 focus:border-main h-[100px] outline-none text-[16px] md:text-[18px] transition duration-300 ease-in-out"
                            {...register("description")}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EditCategoryModalContent;
