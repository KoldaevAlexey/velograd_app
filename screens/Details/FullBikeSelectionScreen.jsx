import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React from "react";

import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { AnimatedImage } from "react-native-ui-lib";

const FullBikeSelectionScreen = () => {
    const route = useRoute();
    const bikeSelectionData = useSelector(
        (state) => state.details.bikeSelection
    );

    const { attributes } = bikeSelectionData.find((item) => {
        return item.id === route.params.id;
    });

    const { data } = attributes;

    return (
        <ScrollView className="bg-slate-900 h-full p-5">
            <Text className="text-gray-100 text-center text-lg p-2">
                {data.title}
            </Text>
            <View className="h-52 w-full">
                <AnimatedImage
                    source={{
                        uri: data.headerImageUrl,
                    }}
                    loader={<ActivityIndicator />}
                    animationDuration={300}
                    className="w-full h-full rounded-2xl"
                />
            </View>
            <Text className="text-gray-100 text-lg p-2 text-center">
                Ростовки
            </Text>
            {data.sizes.map((item, idx) => (
                <View className="flex-row justify-around" key={idx}>
                    <Text className="text-gray-100 text-center text-sm p-2">
                        {item.height} см
                    </Text>
                    <Text className="text-gray-100 text-center text-sm p-2">
                        {item.frameSize}"
                    </Text>
                </View>
            ))}
            <Text className="text-gray-100 text-lg p-2 text-center">
                {data.typesHeader}
            </Text>
            <Text className="text-gray-100 text-l p-2">
                {data.typesDescription}
            </Text>
            {data.types.map((item, idx) => (
                <View key={idx}>
                    <Text className="text-gray-100 text-center text-sm p-2">
                        {item.title}
                    </Text>
                    <View className="h-52 w-full">
                        <AnimatedImage
                            source={{
                                uri: item.imageUrl,
                            }}
                            loader={<ActivityIndicator />}
                            animationDuration={300}
                            className="w-full h-full rounded-2xl"
                        />
                    </View>
                    <Text className="text-gray-100 text-center text-sm p-2">
                        {item.description}
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
};

export { FullBikeSelectionScreen };
