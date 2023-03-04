import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";

import { BlogSectionItem } from "./BlogSectionItem";

import { useSelector } from "react-redux";

const BlogSection = ({ navigation }) => {
    const blogsData = useSelector((state) => state.blogs.blogs);

    return (
        <View className="p-2 mt-10">
            <View className="flex-row w-50 justify-between mb-5">
                <Text className="font-bold text-2xl text-white">Блог</Text>
                <View className="w-40 h-8">
                    <Pressable
                        className="h-full"
                        onPress={() =>
                            navigation.navigate("Blogs", {
                                blogsData,
                            })
                        }
                    >
                        <Text className="text-center text-slate-50 font-bold text-lg">
                            Все статьи...
                        </Text>
                    </Pressable>
                </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row flex-wrap">
                    {blogsData?.map((item) => (
                        <BlogSectionItem
                            key={item.id}
                            title={item.attributes.title}
                            imageUrl={item.attributes.imageUrl}
                            description={item.attributes.description}
                            navigation={navigation}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export { BlogSection };
