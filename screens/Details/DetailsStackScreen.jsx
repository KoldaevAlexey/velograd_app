import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DetailsScreen } from "./DetailScreen";
import { BikeSelectionScreen } from "./BikeSelectionScreen";
import { FullBikeSelectionScreen } from "./FullBikeSelectionScreen";

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
                name="Как выбрать велосипед"
                component={BikeSelectionScreen}
            />
            <DetailsStack.Screen
                name="FullBikeSelectionScreen"
                component={FullBikeSelectionScreen}
            />
        </DetailsStack.Navigator>
    );
};

export { DetailsStackScreen };
