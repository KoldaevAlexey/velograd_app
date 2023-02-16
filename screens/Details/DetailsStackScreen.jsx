import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DetailsScreen } from "./DetailsScreen";
import { BikeSelectionScreen } from "./BikeSelectionScreen";
import { FullBikeSelectionScreen } from "./FullBikeSelectionScreen";
import { WarrantyScreen } from "./WarrantyScreen";
import { StoreAddressesScreen } from "./StoreAddressesScreen";
import { PurchaseReturnsScreen } from "./PurchaseReturnsScreen";
import { SeasonalStorageScreen } from "./SeasonalStorageScreen";

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
            <DetailsStack.Screen name="Гарантия" component={WarrantyScreen} />
            <DetailsStack.Screen
                name="Адреса магазинов"
                component={StoreAddressesScreen}
            />
            <DetailsStack.Screen
                name="Возврат"
                component={PurchaseReturnsScreen}
            />
            <DetailsStack.Screen
                name="Сезонное хранение велосипедов"
                component={SeasonalStorageScreen}
            />
        </DetailsStack.Navigator>
    );
};

export { DetailsStackScreen };
