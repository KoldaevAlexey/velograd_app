import { View, Text } from "react-native";
import React from "react";

const FullProductSpecifications = ({ specifications }) => {
    return (
        <View className="w-full my-5 p-2 border-solid border-2 border-sky-500 rounded-md bg-slate-800">
            {specifications &&
                specifications.map((item) => (
                    <View key={item.id} className="flex-row justify-between">
                        <Text className="text-slate-400 text-sm my-1">
                            {item.title}
                        </Text>

                        <Text className="text-white text-sm my-1">
                            {item.value}
                        </Text>
                    </View>
                ))}
        </View>
    );
};

export { FullProductSpecifications };
