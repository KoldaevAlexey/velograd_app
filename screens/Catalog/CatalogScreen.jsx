import { View, Text, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Categories } from "../../components/Catalog/Categories";

const CatalogScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className="bg-slate-900 h-full p-5">
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-3xl">
                    <Ionicons name="search-outline" size={20} color="black" />
                    <TextInput
                        placeholder="Введите название товара"
                        keyboardType="default"
                    />
                </View>
            </View>
            <Categories navigation={navigation} />
        </SafeAreaView>
    );
};

export { CatalogScreen };
