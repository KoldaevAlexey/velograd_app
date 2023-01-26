import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React from "react";

import { useRoute } from "@react-navigation/native";

import { AnimatedImage } from "react-native-ui-lib";

const FullBlogScreen = ({ navigation }) => {
    const route = useRoute();

    return (
        <ScrollView className="p-2 bg-slate-900 h-full">
            <View className="w-full h-48">
                <AnimatedImage
                    source={{
                        uri: route.params.imageUrl,
                    }}
                    loader={<ActivityIndicator />}
                    animationDuration={300}
                    className="w-full h-full rounded-md"
                />
            </View>
            <Text className="text-white font-bold text-xl text-center my-5">
                {route.params.title}
            </Text>
            <Text className="text-gray-100 text-lg p-2">
                {route.params.description}
            </Text>
        </ScrollView>
    );
};

export { FullBlogScreen };
