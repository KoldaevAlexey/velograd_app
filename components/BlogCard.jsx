import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const BlogCard = ({ title, image }) => {
    return (
        <TouchableOpacity className="ml-3 w-44">
            <Image
                source={{
                    uri: image,
                }}
                className="h-44 w-full rounded-lg"
            />
            <Text className="p-2">{title}</Text>
        </TouchableOpacity>
    );
};

export { BlogCard };
