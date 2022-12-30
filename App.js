import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { HomeStackScreen } from "./screens/HomeStackScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { CatalogStackScreen } from "./screens/CatalogStackScreen";
import { CartScreen } from "./screens/CartScreen";

import { store } from "./redux/store";
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === "Главная") {
                                iconName = focused
                                    ? "information-circle"
                                    : "information-circle-outline";
                            } else if (route.name === "Еще") {
                                iconName = focused ? "list" : "list-outline";
                            } else if (route.name === "Каталог") {
                                iconName = focused
                                    ? "bicycle"
                                    : "bicycle-outline";
                            } else if (route.name === "Корзина") {
                                iconName = focused ? "cart" : "cart-outline";
                            }
                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarActiveTintColor: "gray",
                        tabBarInactiveTintColor: "white",
                        tabBarStyle: { backgroundColor: "#242C3B" },
                        headerShown: false,
                    })}
                >
                    <Tab.Screen name="Главная" component={HomeStackScreen} />
                    <Tab.Screen name="Каталог" component={CatalogStackScreen} />
                    <Tab.Screen name="Корзина" component={CartScreen} />
                    <Tab.Screen name="Еще" component={AboutScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
