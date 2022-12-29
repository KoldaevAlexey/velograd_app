import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

import { itemsData } from "../assets/mockData/data";

import { CatalogItem } from "../components/CatalogItem";
import { ScrollView } from "react-native-gesture-handler";

const CatalogItemsScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const route = useRoute();
    const items = itemsData.filter((item) => item.type === route.params.id);
    return (
        <ScrollView className="bg-slate-900 h-full">
            <Text className="my-5 text-center font-bold text-xl text-white">
                {route.params.title}
            </Text>
            <View className="flex-row flex-wrap">
                {items.map((item) => (
                    <CatalogItem
                        key={item.id}
                        {...item}
                        navigation={navigation}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export { CatalogItemsScreen };
