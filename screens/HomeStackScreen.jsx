import * as React from "react";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./HomeScreen";
import { CategoryScreen } from "./CategoryScreen";

const HomeStackScreen = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Category" component={CategoryScreen} />
        </HomeStack.Navigator>
    );
};

export { HomeStackScreen };
