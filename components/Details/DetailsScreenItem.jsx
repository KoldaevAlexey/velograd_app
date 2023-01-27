import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const DetailsScreenItem = ({ navigation, title }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("FullDetails", { title })}
            className="my-2 bg-slate-800 rounded-xl p-2"
        >
            <Text className="text-white text-lg">{title}</Text>
        </TouchableOpacity>
    );
};

export { DetailsScreenItem };
