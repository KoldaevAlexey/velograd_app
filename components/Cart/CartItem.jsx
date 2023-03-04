import { View, Text, Image, Button, ScrollView } from "react-native";
import React from "react";

import {
    incrementCount,
    decrementCount,
    removeProduct,
} from "../../redux/slices/cartSlice.js";
import { useSelector, useDispatch } from "react-redux";

const CartItem = ({ id, price, title, imagesUrl, count }) => {
    const dispatch = useDispatch();

    return (
        <ScrollView>
            <View className="flex-row">
                <View className="w-48 h-32 my-5 mr-2">
                    <Image
                        source={{
                            uri: imagesUrl[0],
                        }}
                        className="w-full h-full rounded-2xl"
                    />
                </View>
                <View className="my-5">
                    <Text className="my-2 mx-1 text-gray-100 font-bold text-l flex-wrap">
                        {title}
                    </Text>
                    <Text className="my-2 mx-1 text-gray-400 font-bold text-l">
                        {price} руб.
                    </Text>
                    <View className="flex-row items-center">
                        <Button
                            title="-"
                            onPress={() => dispatch(decrementCount(id))}
                        ></Button>
                        <Text className="text-white mx-2">{count}</Text>
                        <Button
                            title="+"
                            onPress={() => dispatch(incrementCount(id))}
                        ></Button>

                        <View className="mx-8">
                            <Button
                                title="Удалить"
                                onPress={() => dispatch(removeProduct(id))}
                            ></Button>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export { CartItem };
