import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation(); // Відстежуємо зміну URL

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Плавна прокрутка до гори
    }, [pathname]); // Викликається щоразу при зміні маршруту

    return null;
};

export default ScrollToTop;
