import { View, Text, Image, Button } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const CategoryCard = ({ image, title, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Category", { title })}
            className="mx-2 items-center h-20"
        >
            <Image
                source={{
                    uri: image,
                }}
                className="w-20 h-20 rounded-full"
            />
            <Text className="my-5">{title}</Text>
        </TouchableOpacity>
    );
};

export { CategoryCard };
