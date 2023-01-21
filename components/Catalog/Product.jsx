import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Product = ({ id, title, imageUrl, price, navigation }) => {
    return (
        <TouchableOpacity
            className="w-44 h-64 mx-2 flex-col items-center bg-slate-800 rounded-xl"
            onPress={() =>
                navigation.navigate("FullProduct", {
                    title,
                    imageUrl,
                    id,
                    price,
                })
            }
        >
            <View className="w-60 h-44 p-8 -mt-8">
                <Image
                    source={{
                        uri: imageUrl,
                    }}
                    className="w-full h-full rounded-2xl"
                />
            </View>

            <Text className="my-2 text-gray-100 font-bold text-l">{title}</Text>
            <Text className="my-2 text-gray-400 font-bold text-l">
                {price} руб.
            </Text>
        </TouchableOpacity>
    );
};

export { Product };
