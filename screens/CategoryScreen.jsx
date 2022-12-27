import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const CategoryScreen = () => {
    const route = useRoute();
    return (
        <View>
            <Text className="my-5">{route.params.title}</Text>
        </View>
    );
};

export { CategoryScreen };
