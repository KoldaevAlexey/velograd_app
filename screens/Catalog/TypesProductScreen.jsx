import { View, Text, SafeAreaView } from "react-native";
import React from "react";

import { TypesProduct } from "../../components/Catalog/TypesProduct";

const TypesProductScreen = ({ navigation }) => {
    return (
        <SafeAreaView className={"bg-slate-900 h-full"}>
            <TypesProduct navigation={navigation} />
        </SafeAreaView>
    );
};

export { TypesProductScreen };
