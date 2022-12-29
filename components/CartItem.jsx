import { View, Text, Image } from "react-native";
import React from "react";

const CartItem = ({ id, price, title, img }) => {
    console.log(title, price);
    return (
        <View className="flex-row my-5 mx-3">
            <Image
                source={{
                    uri: img,
                }}
                className="w-20 h-20 rounded-2xl my-5"
            />
            <View className="my-5">
                <Text className="my-2 mx-2 text-gray-100 font-bold text-l">
                    {title}
                </Text>
                <Text className="my-2 mx-2 text-gray-400 font-bold text-l">
                    {price} руб.
                </Text>
            </View>
        </View>
    );
};

export { CartItem };
