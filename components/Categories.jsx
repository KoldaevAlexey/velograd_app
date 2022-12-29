import { View, Text, ScrollView } from "react-native";
import React from "react";
import { CategoryCard } from "./CategoryCard";

import { categoryCardData } from "../assets/mockData/data";

const Categories = ({ navigation }) => {
    return (
        <View className="h-52">
            <Text className="text-lg my-5 font-bold text-center text-white">
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
                    <CategoryCard
                        key={item.id}
                        {...item}
                        navigation={navigation}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export { Categories };
