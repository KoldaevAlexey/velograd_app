import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./HomeScreen";
import { BlogsScreen } from "./BlogsScreen";
import { FullBlogScreen } from "./FullBlogScreen";

const HomeStackScreen = () => {
    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator
            screenOptions={{
                title: "Назад",
                headerStyle: {
                    backgroundColor: "#1E293B",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Blogs" component={BlogsScreen} />
            <HomeStack.Screen name="FullBlog" component={FullBlogScreen} />
        </HomeStack.Navigator>
    );
};

export { HomeStackScreen };
