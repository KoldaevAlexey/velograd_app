import { View, Text, ScrollView } from "react-native";
import React from "react";

import { blogCardData } from "../assets/mockData/data";
import { BlogCard } from "./BlogCard";

const Blogs = () => {
    return (
        <View className="-mt-5">
            <Text className="font-bold text-lg mb-5 text-center text-white">
                Блог
            </Text>
            <View className="flex-row flex-wrap">
                {blogCardData?.map((item) => (
                    <BlogCard key={item.id} {...item} />
                ))}
            </View>
        </View>
    );
};

export { Blogs };
