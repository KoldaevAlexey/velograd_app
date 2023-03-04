import { View, Text, ActivityIndicator, Pressable } from "react-native";
import React from "react";

import { AnimatedImage } from "react-native-ui-lib";

const BlogSectionItem = ({ title, imageUrl, description, navigation }) => {
    return (
        <Pressable
            onPress={() =>
                navigation.navigate("FullBlog", {
                    title,
                    description,
                    imageUrl,
                })
            }
            className="mr-5 w-44"
        >
            <View className="h-32">
                <AnimatedImage
                    source={{
                        uri: imageUrl,
                    }}
                    loader={<ActivityIndicator />}
                    animationDuration={300}
                    className="w-full h-full rounded-2xl"
                />
            </View>
            <Text className="p-2 text-white text-base">{title}</Text>
        </Pressable>
    );
};

export { BlogSectionItem };
