import { View, Text, ScrollView } from "react-native";
import React from "react";

import { BlogsScreenItem } from "../../components/Blog/BlogsScreenItem";

import { useDispatch, useSelector } from "react-redux";

const BlogsScreen = ({ navigation }) => {
    const blogsData = useSelector((state) => state.blogs.blogs);

    return (
        <ScrollView className="p-2 bg-slate-900 h-full">
            {blogsData?.map((item) => (
                <BlogsScreenItem
                    key={item.id}
                    title={item.attributes.title}
                    imageUrl={item.attributes.imageUrl}
                    description={item.attributes.description}
                    navigation={navigation}
                />
            ))}
        </ScrollView>
    );
};

export { BlogsScreen };
