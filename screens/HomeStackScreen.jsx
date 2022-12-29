import * as React from "react";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./HomeScreen";
import { CatalogItemsScreen } from "./CatalogItemsScreen";

import { useNavigation } from "@react-navigation/native";

const HomeStackScreen = () => {
    const navigation = useNavigation();
    const HomeStack = createNativeStackNavigator();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Category" component={CatalogItemsScreen} />
        </HomeStack.Navigator>
    );
};

export { HomeStackScreen };
