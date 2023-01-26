import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { Dash } from "react-native-ui-lib";

const DetailsScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerStyle: {
                backgroundColor: "#1E293B",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
        });
    }, []);

    return (
        <SafeAreaView className="bg-slate-900 h-full">
            <ScrollView>
                <TouchableOpacity className="my-2">
                    <Text className="text-white text-lg">Адреса магазинов</Text>
                    <Dash horizontal color={"white"} length={400} />
                </TouchableOpacity>
                <TouchableOpacity className="my-2">
                    <Text className="text-white text-lg">
                        Как выбрать велосипед
                    </Text>
                    <Dash horizontal color={"white"} length={400} />
                </TouchableOpacity>
                <TouchableOpacity className="my-2">
                    <Text className="text-white text-lg">Гарантия</Text>
                    <Dash horizontal color={"white"} length={400} />
                </TouchableOpacity>
                <TouchableOpacity className="my-2">
                    <Text className="text-white text-lg">Возврат</Text>
                    <Dash horizontal color={"white"} length={400} />
                </TouchableOpacity>
                <TouchableOpacity className="my-2">
                    <Text className="text-white text-lg">
                        Сезонное хранение
                    </Text>
                    <Dash horizontal color={"white"} length={400} />
                </TouchableOpacity>
                <TouchableOpacity className="my-2">
                    <Text className="text-white text-lg">Трейд-ин</Text>
                    <Dash horizontal color={"white"} length={400} />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export { DetailsScreen };
