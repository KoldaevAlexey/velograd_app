import { View, Text, TextInput, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Carousel } from "react-native-ui-lib";

import { carouselImages } from "../assets/mockData/data";
import { Categories } from "../components/Categories";
import { Blogs } from "../components/Blogs";

const HomeScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-slate-900 h-full p-1">
            <ScrollView showsVerticalScrollIndicator={false} className="h-full">
                <Categories navigation={navigation} />
                <View>
                    <Text className="my-5 text-xl font-bold text-center text-white">
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
