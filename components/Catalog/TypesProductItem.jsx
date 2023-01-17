import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const TypesProductItem = ({ navigation, title, imageUrl }) => {
    const route = useRoute();

    return (
        <TouchableOpacity
            className="mt-5 flex-row bg-slate-800 p-3 rounded-xl"
            onPress={() =>
                navigation.navigate("Products", {
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

export { TypesProductItem };
