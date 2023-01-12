import { View, Text, SafeAreaView } from "react-native";
import React from "react";

import { TypesProduct } from "../../components/Catalog/TypesProduct";

const TypesProductScreen = () => {
    return (
        <SafeAreaView>
            <Text>TypesProductScreen</Text>
            <TypesProduct />
        </SafeAreaView>
    );
};

export { TypesProductScreen };
