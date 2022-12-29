import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CatalogItem = ({
    id,
    type,
    title,
    description,
    img,
    price,
    navigation,
}) => {
    return (
        <TouchableOpacity
            className="w-44 h-64 my-1 mx-2 p-3 flex-col items-center bg-slate-800 rounded-xl"
            onPress={() =>
                navigation.navigate("FullItem", {
                    id,
                    type,
                    title,
                    description,
                    img,
                    price,
                })
            }
        >
            <Image
                source={{
                    uri: img,
                }}
                className="w-full h-2/3 rounded-2xl"
            />
            <Text className="my-2 text-gray-100 font-bold text-l">{title}</Text>
            <Text className="my-2 text-gray-400 font-bold text-l">
                {price} руб.
            </Text>
        </TouchableOpacity>
    );
};

export { CatalogItem };
