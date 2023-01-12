import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CatalogScreen } from "./CatalogScreen";
import { ProductsScreen } from "./ProductsScreen";
import { FullProductScreen } from "./FullProductScreen";
import { TypesProductScreen } from "./TypesProductScreen";

const CatalogStackScreen = () => {
    const CatalogStack = createNativeStackNavigator();
    return (
        <CatalogStack.Navigator>
            <CatalogStack.Screen name="Catalog" component={CatalogScreen} />
            <CatalogStack.Screen name="Products" component={ProductsScreen} />
            <CatalogStack.Screen
                name="TypesProduct"
                component={TypesProductScreen}
            />
            <CatalogStack.Screen
                name="FullProduct"
                component={FullProductScreen}
            />
        </CatalogStack.Navigator>
    );
};

export { CatalogStackScreen };
