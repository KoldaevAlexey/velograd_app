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
    const { title, imagesUrl, price } = attributes;
    return (
        <TouchableOpacity
            className="w-44 h-64 ml-5 flex-col items-center bg-slate-800 rounded-xl"
            onPress={() =>
                navigation.navigate("FullProduct", {
                    ...attributes,
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
            <Text className="my-2 text-gray-100 font-bold text-l">{title}</Text>
            <Text className="my-2 text-gray-400 font-bold text-l">
                {price} руб.
            </Text>
        </TouchableOpacity>
    );
};

export { Product };
