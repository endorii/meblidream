import { createRoot } from "react-dom/client";
import "./index.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { StrictMode } from "react";
import MainPage from "./pages/MainPage/MainPage";
import Admin from "./pages/Admin/Admin";
// import { Provider } from "react-redux";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="admin" element={<Admin />}></Route>
        </>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <Provider store={store}> */}
        <RouterProvider router={router} />
        {/* </Provider> */}
    </StrictMode>
);
