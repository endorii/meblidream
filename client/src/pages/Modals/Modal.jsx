import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-[40px] rounded-lg shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-[15px] right-[15px] text-darkblue hover:text-gray-700"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>,
        document.getElementById("modal")
    );
}
