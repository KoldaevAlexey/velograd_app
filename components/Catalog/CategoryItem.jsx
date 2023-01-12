import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

/* ("TypesProductScreen", {
                    screen: "TypesProduct",
                    params: title,
                    id,
                }) */

const CategoryItem = ({ id, title, imageUrl, navigation }) => {
    return (
        <TouchableOpacity
            className="mt-5 flex-row bg-slate-800 p-3 rounded-xl"
            onPress={() =>
                navigation.navigate("TypesProduct", {
                    title,
                })
            }
        >
            <Image
                source={{
                    uri: imageUrl,
                }}
                className="w-28 h-28 rounded-2xl"
            />
            <Text className="ml-5 text-gray-100 font-bold text-xl">
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export { CategoryItem };
