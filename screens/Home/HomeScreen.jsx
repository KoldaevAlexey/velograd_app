import { View, Text, TextInput, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Carousel } from "react-native-ui-lib";

import { carouselImages } from "../../assets/mockData/data";
import { BlogSection } from "../../components/Blog/BlogSection";

import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { fetchBlogsData } from "../../redux/slices/BlogsSlice";

import axios from "axios";

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const route = useRoute();

    const blogsData = useSelector((state) => state.blogs.blogs);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    React.useEffect(() => {
        try {
            dispatch(fetchBlogsData);
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    console.log(blogsData);

    return (
        <SafeAreaView className="bg-slate-900 h-full p-1">
            <ScrollView showsVerticalScrollIndicator={false} className="h-full">
                <View>
                    <Text className="my-5 text-2xl font-bold text-center text-white">
                        Акции
                    </Text>
                    <Carousel
                        containerStyle={{
                            height: 200,
                        }}
                        loop
                        autoplay={true}
                    >
                        {carouselImages.map((image, i) => (
                            <Image
                                key={i}
                                source={{
                                    uri: image,
                                }}
                                className="w-auto h-3/4 rounded-lg"
                            />
                        ))}
                    </Carousel>
                </View>
                <BlogSection navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
};

export { HomeScreen };
