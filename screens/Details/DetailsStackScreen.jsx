import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DetailsScreen } from "./DetailScreen";
import { FullDetailsScreen } from "./FullDetailsScreen";

const DetailsStackScreen = () => {
    const DetailsStack = createNativeStackNavigator();

    return (
        <DetailsStack.Navigator
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
            <DetailsStack.Screen name="Details" component={DetailsScreen} />
            <DetailsStack.Screen
                name="FullDetails"
                component={FullDetailsScreen}
            />
        </DetailsStack.Navigator>
    );
};

export { DetailsStackScreen };
