import { View, Text, ScrollView } from "react-native";
import React from "react";

import { CategoryItem } from "./CatalogItem";
import axios from "axios";

const Catalog = ({ navigation }) => {
    const [categories, setCategories] = React.useState(null);

    React.useEffect(() => {
        try {
            const fetchCategoriesData = async () => {
                const { data } = await axios.get(
                    "http://10.0.2.2:1337/api/categories"
                );
                setCategories(data.data);
            };
            fetchCategoriesData();
        } catch (e) {
            console.log(e.response.data);
        }
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {categories?.map((item) => (
                <CatalogItem
                    key={item.attributes.id}
                    title={item.attributes.title}
                    imageUrl={item.attributes.imageUrl}
                    navigation={navigation}
                />
            ))}
        </ScrollView>
    );
};

export { Catalog };
