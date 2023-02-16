import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

import { useRoute } from "@react-navigation/native";

const SeasonalStorageScreen = () => {
    const route = useRoute();

    const { imageUrl, tariffs, services } = route.params.description;

    return (
        <ScrollView className="bg-slate-900 h-full p-5">
            <Text className="text-white text-center text-xl my-5">
                {route.params.title}
            </Text>
            <View className="h-40 w-full">
                <Image
                    source={{ uri: imageUrl }}
                    className="w-full h-full rounded-2xl"
                />
            </View>
            <View className="flex-row justify-between my-5 p-2 border-solid border-2 border-sky-500 rounded-md bg-slate-800">
                <View>
                    <Text className="text-white text-sm mt-2">
                        Срок хранения
                    </Text>
                    <Text className="text-white text-sm mt-1">3 месяца</Text>
                    <Text className="text-white text-sm my-3">5 месяцев</Text>
                    <Text className="text-white text-sm">+1 месяц</Text>
                </View>

                {tariffs.map((item) => (
                    <View key={item.id}>
                        <Text className="text-white font-bold text-lg">
                            {item.title}
                        </Text>
                        <View className="my-1">
                            <Text className="text-white font-bold">
                                {item.prices.threeMonths} руб.
                            </Text>
                            <Text className="text-white font-bold my-3">
                                {item.prices.fiveMonths} руб.
                            </Text>
                            <Text className="text-white font-bold">
                                {item.prices.extension} руб.
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export { SeasonalStorageScreen };
