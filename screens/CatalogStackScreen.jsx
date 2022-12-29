import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CatalogScreen } from "./CatalogScreen";
import { CatalogItemsScreen } from "./CatalogItemsScreen";
import { FullItemScreen } from "./FullItemScreen";
import { CartScreen } from "./CartScreen";

const CatalogStackScreen = () => {
    const CatalogStack = createNativeStackNavigator();
    return (
        <CatalogStack.Navigator>
            <CatalogStack.Screen name="Catalog" component={CatalogScreen} />
            <CatalogStack.Screen
                name="Category"
                component={CatalogItemsScreen}
            />
            <CatalogStack.Screen name="FullItem" component={FullItemScreen} />
            <CatalogStack.Screen name="Cart" component={CartScreen} />
        </CatalogStack.Navigator>
    );
};

export { CatalogStackScreen };
