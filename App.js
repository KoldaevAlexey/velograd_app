import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { HomeScreen } from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { CatalogScreen } from "./screens/CatalogScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
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
                            iconName = focused ? "bicycle" : "bicycle-outline";
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                })}
            >
                <Tab.Screen name="Главная" component={HomeScreen} />
                <Tab.Screen name="Каталог" component={CatalogScreen} />
                <Tab.Screen name="Еще" component={AboutScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
