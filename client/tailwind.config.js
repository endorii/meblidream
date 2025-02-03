/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {},
        extend: {
            boxShadow: {
                custom: "0px 5px 220px -1px rgba(30,64,175,0.10);",
            },
            backgroundImage: {
                whitebg:
                    "linear-gradient(125deg, rgb(255, 255, 255) 100%, rgb(255, 255, 255) 100%);",
                mainbg: "linear-gradient(125deg, rgba(38,89,254,1) 0%, rgba(30,64,175,1) 100%);",
            },
            colors: {
                white: "#ffffff",
                main: "#1E40AF",
                darkblue: "#0f2253",
                black: "#000000",
                dark: "#6B7280",
                gray: "#D1D5DB",
                darkgray: "#545454",
                transperent: "#00000000",
                light: "#F6F4F9",
                lightgray: "#9c9c9c",
                lightmain: "#3453b7",
            },
        },
    },
    plugins: [],
};
