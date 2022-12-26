import { View, Text, TextInput, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Carousel } from "react-native-ui-lib";

import { carouselImages } from "../assets/mockData/data";
import { Categories } from "../components/Categories";
import { Blogs } from "../components/Blogs";

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-blue-500 h-full p-1">
            <ScrollView showsVerticalScrollIndicator={false} className="h-full">
                <View className="flex-row items-center space-x-2 pb-2 mx-4">
                    <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-3xl">
                        <Ionicons
                            name="search-outline"
                            size={20}
                            color="black"
                        />
                        <TextInput
                            placeholder="Введите название товара"
                            keyboardType="default"
                        />
                    </View>
                </View>
                <Categories />
                <View>
                    <Text className="my-5 text-xl font-bold text-center">
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
                <Blogs />
            </ScrollView>
        </SafeAreaView>
    );
};

export { HomeScreen };
