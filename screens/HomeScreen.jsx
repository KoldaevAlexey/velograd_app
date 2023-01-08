import { View, Text, TextInput, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Carousel } from "react-native-ui-lib";

import { carouselImages } from "../assets/mockData/data";
import { Categories } from "../components/Categories";
import { Blogs } from "../components/Blogs";

import { useDispatch, useSelector } from "react-redux"; //1
import { fetchItemsData } from "../redux/slices/itemsSlice"; //1
import axios from "axios"; //1

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch(); //1

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    React.useEffect(() => {
        //1
        try {
            const fetchData = async () => {
                const { data } = await axios.get(
                    "http://192.168.1.256:1337/api/products"
                );
                console.log(data);
                return data;
            };
            fetchData();
        } catch (e) {
            console.log(e.response.data);
        }
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
