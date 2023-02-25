import { View, Text, TextInput } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";

const SearchInput = ({ navigation }) => {
    const [value, setValue] = React.useState("");

    const handleKeyPress = () => {
        navigation.navigate("SearchScreen", { value });
        setValue("");
    };

    return (
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-3xl">
            <Ionicons name="search-outline" size={20} color="black" />
            <TextInput
                placeholder="Введите название товара"
                keyboardType="default"
                onChangeText={setValue}
                value={value}
                onSubmitEditing={handleKeyPress}
            />
        </View>
    );
};

export { SearchInput };
