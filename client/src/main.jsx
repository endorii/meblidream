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
import Login from "./pages/Admin/Login";
import WelcomeContent from "./pages/User/pages/WelcomePage/WelcomeContent";
import About from "./pages/User/pages/AboutPage/About";
import Gallery from "./pages/User/pages/GalleryPage/Gallery";
import Contacts from "./pages/User/pages/ContactsPage/Contacts";
import Product from "./pages/User/pages/ProductsPage/Product";
import { Provider } from "react-redux";
import store from "./store/store";
import ProductsItem from "./pages/User/pages/ProductsPage/ProductsItem/ProductsItem";
import Panel from "./pages/Admin/Panel/Panel";
import Welcome from "./pages/Admin/Panel/Welcome/Welcome";
import CallBook from "./pages/Admin/Panel/CallBook/CallBook";
import Categories from "./pages/Admin/Panel/Categories/Categories";

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
            <Route path="/admin" element={<Panel />}>
                <Route path="" element={<Welcome />}></Route>
                <Route path="callbook" element={<CallBook />}></Route>
                <Route path="categories" element={<Categories />}></Route>
            </Route>
            <Route path="/admin/login" element={<Login />}></Route>
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
