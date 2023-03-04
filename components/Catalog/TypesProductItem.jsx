import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { useRoute } from "@react-navigation/native";

const TypesProductItem = ({ navigation, title, imageUrl }) => {
    const route = useRoute();

    return (
        <TouchableOpacity
            className="w-48 h-40 my-2 flex-col bg-slate-800 p-1 rounded-2xl justify-between items-center"
            onPress={() =>
                navigation.navigate("Products", {
                    title,
                })
            }
        >
            <Text className="text-gray-100 font-bold text-lg">{title}</Text>
            <View className="w-48 h-28">
                <Image
                    source={{
                        uri: imageUrl,
                    }}
                    className="w-full h-full rounded-2xl"
                />
            </View>
        </TouchableOpacity>
    );
};

export { TypesProductItem };
