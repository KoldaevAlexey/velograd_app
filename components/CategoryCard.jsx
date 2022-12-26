import { View, Text, Image } from "react-native";
import React from "react";

const CategoryCard = ({ image, title }) => {
    return (
        <View className="mx-2 items-center h-20">
            <Image
                source={{
                    uri: image,
                }}
                className="w-20 h-20 rounded-full"
            />
            <Text className="my-5">{title}</Text>
        </View>
    );
};

export { CategoryCard };
