import { View, Text, ScrollView } from "react-native";
import React from "react";

import { CategoryItem } from "./CategoryItem";

import { useSelector, useDispatch } from "react-redux";
import { fetchCategoriesData } from "../../redux/slices/categoriesSlice";

const Categories = ({ navigation }) => {
    const categories = useSelector((state) => state.categories.categories);
    const dispatch = useDispatch();

    React.useEffect(() => {
        try {
            dispatch(fetchCategoriesData());
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {categories?.map((item) => (
                <CategoryItem
                    key={item.category.id}
                    title={item.category.title}
                    imageUrl={item.category.imageUrl}
                    typesProduct={item.types}
                    navigation={navigation}
                />
            ))}
        </ScrollView>
    );
};

export { Categories };
