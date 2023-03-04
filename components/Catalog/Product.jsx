import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from "react-native";
import React from "react";

import { AnimatedImage } from "react-native-ui-lib";

const Product = ({ navigation, id, attributes }) => {
    const { title, imagesUrl, price, type } = attributes;

    return (
        <TouchableOpacity
            className="w-44 h-56 ml-5 my-2 flex-col items-center bg-slate-800 rounded-xl"
            onPress={() =>
                navigation.navigate("FullProduct", {
                    ...attributes,
                    id,
                })
            }
        >
            <View className="w-60 h-44 p-8 -mt-8">
                <AnimatedImage
                    source={{
                        uri: imagesUrl[0],
                    }}
                    loader={<ActivityIndicator />}
                    animationDuration={300}
                    className="w-full h-full rounded-2xl"
                />
            </View>
            <View className="-mt-3">
                <Text className="text-gray-400 font-bold text-l text-center">
                    {type}
                </Text>
                <Text className="my-1 text-gray-100 font-bold text-l text-center">
                    {title}
                </Text>
                <Text className="text-gray-400 font-bold text-l text-center">
                    {price} руб.
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export { Product };
