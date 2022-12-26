import { View, Text, ScrollView } from "react-native";
import React from "react";
import { CategoryCard } from "./CategoryCard";

import { categoryCardData } from "../assets/mockData/data";

const Categories = () => {
    return (
        <View className="h-48">
            <Text className="text-lg my-5 font-bold text-center">
                Категории товаров
            </Text>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingTop: 5,
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {categoryCardData?.map((item) => (
                    <CategoryCard key={item.id} {...item} />
                ))}
            </ScrollView>
        </View>
    );
};

export { Categories };
