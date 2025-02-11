import { ImSpinner2 } from "react-icons/im";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Loader = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [prevPath, setPrevPath] = useState(location.pathname); // Зберігаємо попередній шлях

    useEffect(() => {
        if (location.pathname !== prevPath) {
            setLoading(true);
            setPrevPath(location.pathname); // Оновлюємо попередній шлях

            const timeout = setTimeout(() => setLoading(false), 500); // Імітуємо затримку
            return () => clearTimeout(timeout);
        }
    }, [location.pathname]); // Тепер слідкуємо лише за `location.pathname`

    if (!loading) return null; // Якщо `loading === false`, нічого не рендеримо

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[20px] bg-white/30 z-50">
            <ImSpinner2 className="animate-spin text-5xl text-blue-500" />
        </div>
    );
};

export default Loader;
