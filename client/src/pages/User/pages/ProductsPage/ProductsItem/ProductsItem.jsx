import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../../store/slices/categories.slice";

import ProductPage from "../../ProductPage/ProductPage";

const ProductsItem = () => {
    const { categoryName } = useParams();
    const { categories } = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const category = categories.find(
        (category) => category.pathName === categoryName
    );

    return <ProductPage category={category} />;
};

export default ProductsItem;
