import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from "react-native";
import React from "react";

import { AnimatedImage } from "react-native-ui-lib";

const BlogSectionItem = ({ title, image }) => {
    return (
        <TouchableOpacity className="mr-5 w-44">
            <View className="h-32">
                <AnimatedImage
                    source={{
                        uri: image,
                    }}
                    loader={<ActivityIndicator />}
                    animationDuration={300}
                    className="w-full h-full rounded-2xl"
                />
            </View>
            <Text className="p-2 text-white text-base">{title}</Text>
        </TouchableOpacity>
    );
};

export { BlogSectionItem };
