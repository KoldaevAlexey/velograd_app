import { Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const CategoryCard = ({ id, image, title, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Category", { title, id })}
            className="mx-1 items-center h-28"
        >
            <Image
                source={{
                    uri: image,
                }}
                className="w-24 h-24 rounded-xl"
            />
            <Text className="my-5 text-white">{title}</Text>
        </TouchableOpacity>
    );
};

export { CategoryCard };
