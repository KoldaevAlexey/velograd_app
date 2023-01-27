import { View, Text, ScrollView } from "react-native";
import React from "react";

import { useRoute } from "@react-navigation/native";

const FullDetailsScreen = ({ navigation }) => {
    const route = useRoute();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.title,
        });
    }, []);

    return (
        <ScrollView className="bg-slate-900 h-full p-3">
            <Text className="text-white">123456</Text>
        </ScrollView>
    );
};

export { FullDetailsScreen };
