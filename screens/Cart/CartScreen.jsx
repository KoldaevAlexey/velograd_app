import { SafeAreaView } from "react-native";
import React from "react";

import { Cart } from "../../components/Cart/Cart";

const CartScreen = () => {
    return (
        <SafeAreaView className="bg-slate-900 h-full">
            <Cart />
        </SafeAreaView>
    );
};

export { CartScreen };
