import {
    View,
    Text,
    SafeAreaView,
    Image,
    Button,
    ScrollView,
} from "react-native";
import React from "react";

import { CartContext } from "../App";
import { CartItem } from "../components/CartItem";

const CartScreen = () => {
    const { cartItems, setCartItems } = React.useContext(CartContext);
    console.log(cartItems);

    return (
        <SafeAreaView className="bg-slate-900 h-full">
            <ScrollView>
                {cartItems.length === 0 ? (
                    <Text className="text-white text-center text-2xl my-64">
                        Корзина пустая, добавьте товар
                    </Text>
                ) : (
                    cartItems.map((item) => (
                        <>
                            <CartItem key={item.id} {...item} />
                        </>
                    ))
                )}
                {cartItems.length > 0 && (
                    <Button
                        title="очистить корзину"
                        onPress={() => setCartItems([])}
                    ></Button>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export { CartScreen };
