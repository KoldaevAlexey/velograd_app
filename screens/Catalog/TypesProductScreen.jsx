import { View, Text, SafeAreaView } from "react-native";
import React from "react";

import { TypesProduct } from "../../components/Catalog/TypesProduct";

const TypesProductScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>TypesProductScreen</Text>
            <TypesProduct navigation={navigation} />
        </SafeAreaView>
    );
};

export { TypesProductScreen };
