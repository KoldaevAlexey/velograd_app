import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const BikeSelectionItem = ({ navigation, title, id }) => {
    return (
        <TouchableOpacity
            className="mt-5 flex-row bg-slate-800 p-3 rounded-xl"
            onPress={() =>
                navigation.navigate("FullBikeSelectionScreen", {
                    title,
                    id,
                })
            }
        >
            <Text className="ml-5 text-gray-100 font-bold text-xl">
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export { BikeSelectionItem };
