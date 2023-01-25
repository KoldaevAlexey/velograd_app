import { View, Text, ScrollView, Button, Pressable } from "react-native";
import React from "react";

import { blogCardData } from "../../assets/mockData/data";
import { BlogSectionItem } from "./BlogSectionItem";

const BlogSection = ({ navigation }) => {
    return (
        <View className="p-2">
            <View className="flex-row w-50 justify-between">
                <Text className="font-bold text-2xl text-white">Блог</Text>
                <View className="w-40 h-8">
                    <Pressable
                        className="rounded-lg bg-indigo-500 h-full"
                        onPress={() =>
                            navigation.navigate("Blogs", {
                                /* title,
                                typesProduct, */
                            })
                        }
                    >
                        <Text className="text-center text-slate-50 font-bold text-lg">
                            Все статьи...
                        </Text>
                    </Pressable>
                </View>
            </View>
            <ScrollView horizontal>
                <View className="flex-row flex-wrap my-10">
                    {blogCardData?.map((item) => (
                        <BlogSectionItem key={item.id} {...item} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export { BlogSection };
