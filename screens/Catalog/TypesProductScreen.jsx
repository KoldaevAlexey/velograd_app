import { View, Text } from "react-native";
import React from "react";

import { TypesProduct } from "../../components/Catalog/TypesProduct";

const TypesProductScreen = () => {
    return (
        <View>
            <Text>TypesScreen</Text>
            <TypesProduct />
        </View>
    );
};

export { TypesProductScreen };
