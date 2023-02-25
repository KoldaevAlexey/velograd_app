import { View, Text, TextInput, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Carousel } from "react-native-ui-lib";

import { carouselImages } from "../../assets/mockData/data";
import { BlogSection } from "../../components/Blog/BlogSection";

import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { fetchBlogsData } from "../../redux/slices/blogsSlice";

import { TestHomeScreenCatalog } from "../../components/TestFeatures/TestHomeScreenCatalog"; //TEST
import { TestBrandsHomeScreen } from "../../components/TestFeatures/TestBrandsHomeScreen"; // TEST
import { TestOpenWhatsAppWidget } from "../../components/TestFeatures/TestOpenWhatsAppWidget"; // TEST
import { TestCallPhoneNumber } from "../../components/TestFeatures/TestCallPhoneNumber";

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    React.useEffect(() => {
        try {
            dispatch(fetchBlogsData());
        } catch (e) {
            console.log(e.message);
        }
    }, []);

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
                {/* Test */}
                <Text className="text-white font-bold text-2xl text-left mb-5">
                    Наши товары
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TestHomeScreenCatalog />
                </ScrollView>
                <Text className="text-white font-bold text-2xl text-left my-5">
                    Бренды
                </Text>
                <TestBrandsHomeScreen />
                {/* Test */}
                <BlogSection navigation={navigation} />
                <Text className="text-white font-bold text-2xl text-left p-2">
                    Связаться с нами:
                </Text>
                <TestOpenWhatsAppWidget />
                <TestCallPhoneNumber />
            </ScrollView>
        </SafeAreaView>
    );
};

export { HomeScreen };
