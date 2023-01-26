import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const BlogsScreenItem = ({ navigation, title, description, imageUrl }) => {
    return (
        <TouchableOpacity
            className="mt-2 flex-row bg-slate-800 p-2 rounded-xl h-32"
            onPress={() =>
                navigation.navigate("FullBlog", {
                    title,
                    description,
                    imageUrl,
                })
            }
        >
            <Image
                source={{
                    uri: imageUrl,
                }}
                className="w-28 h-28 rounded-2xl"
            />
            <View className="w-4/6">
                <Text className="ml-5 text-gray-100 font-bold text-lg">
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export { BlogsScreenItem };
