import { createRoot } from "react-dom/client";
import "./index.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { StrictMode } from "react";
import Wrapper from "./pages/User/Wrapper";
import Admin from "./pages/Admin/Admin";
import WelcomeContent from "./pages/User/pages/WelcomePage/WelcomeContent";
import About from "./pages/User/pages/AboutPage/About";
import Gallery from "./pages/User/pages/GalleryPage/Gallery";
import Contacts from "./pages/User/pages/ContactsPage/Contacts";
import Product from "./pages/User/pages/ProductsPage/Product";
import { Provider } from "react-redux";
import store from "./store/store";
import ProductsItem from "./pages/User/pages/ProductsPage/ProductsItem/ProductsItem";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Wrapper />}>
                <Route path="" element={<WelcomeContent />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/products" element={<Product />} />
                <Route
                    path="/products/:categoryName"
                    element={<ProductsItem />}
                />
                <Route path="/contacts" element={<Contacts />} />
            </Route>
            <Route path="/admin" element={<Admin />}></Route>
        </>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
