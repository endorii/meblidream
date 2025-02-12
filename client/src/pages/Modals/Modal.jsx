import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ onClose, children }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return createPortal(
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[150] cursor-pointer h-full overflow-y-auto"
            onClick={onClose}
        >
            <div
                className="cursor-default"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.getElementById("modal")
    );
}
