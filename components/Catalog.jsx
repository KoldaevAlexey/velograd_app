import { View, Text, ScrollView } from "react-native";
import React from "react";

import { categoryCardData } from "../assets/mockData/data";
import { CatalogItem } from "./CatalogItem";

const Catalog = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {categoryCardData.map((item) => (
                <CatalogItem key={item.id} {...item} />
            ))}
        </ScrollView>
    );
};

export { Catalog };
