import { View, Text, ScrollView } from "react-native";
import React from "react";

import { categoryCardData } from "../assets/mockData/data";
import { CatalogCategoryList } from "./CatalogCategoryList";

const Catalog = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {categoryCardData.map((item) => (
                <CatalogCategoryList
                    key={item.id}
                    {...item}
                    navigation={navigation}
                />
            ))}
        </ScrollView>
    );
};

export { Catalog };
