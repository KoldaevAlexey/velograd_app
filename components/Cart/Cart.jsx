import {
    View,
    Text,
    SafeAreaView,
    Image,
    Button,
    ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { clearProducts } from "../../redux/slices/cartSlice";
import React from "react";

import { CartItem } from "./CartItem";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const totalCount = cartItems.reduce((acc, item) => {
        return acc + item.count;
    }, 0);

    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + item.price * item.count;
    }, 0);

    return (
        <SafeAreaView className="bg-slate-900 h-full">
            <ScrollView className="p-2">
                {cartItems.length === 0 ? (
                    <Text className="text-white text-center text-2xl my-64">
                        Корзина пустая, добавьте товар
                    </Text>
                ) : (
                    cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))
                )}
                {cartItems.length > 0 && (
                    <>
                        <View className="mt-16">
                            <Button
                                title="очистить корзину"
                                onPress={() => dispatch(clearProducts())}
                            ></Button>
                        </View>
                        <View className="my-20 p-5">
                            <Text className="text-white text-lg">
                                Общая сумма: {totalPrice} руб.
                            </Text>
                            <Text className="text-white text-lg">
                                Количество товаров: {totalCount} шт.
                            </Text>
                        </View>
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export { Cart };
