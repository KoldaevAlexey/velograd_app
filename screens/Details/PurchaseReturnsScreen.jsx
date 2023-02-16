import { View, Text, ScrollView } from "react-native";
import React from "react";

import { useRoute } from "@react-navigation/native";

const PurchaseReturnsScreen = () => {
    const route = useRoute();

    const { info } = route.params.description;

    console.log(info);

    return (
        <ScrollView className="bg-slate-900 h-full p-5">
            <Text className="text-white text-center text-xl my-5">
                {route.params.title}
            </Text>
            <Text className="text-white text-left tracking-wide leading-5 text-ml my-5">
                {info}
            </Text>
        </ScrollView>
    );
};

export { PurchaseReturnsScreen };
