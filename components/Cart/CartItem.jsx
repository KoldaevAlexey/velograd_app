import { View, Text, Image, Button } from "react-native";
import React from "react";

import {
    incrementCount,
    decrementCount,
    removeProduct,
} from "../../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const CartItem = ({ id, price, title, img, count }) => {
    const dispatch = useDispatch();

    return (
        <View>
            <View className="flex-row mx-1">
                <Image
                    source={{
                        uri: img,
                    }}
                    className="w-24 h-24 rounded-2xl my-5"
                />
                <View className="my-5">
                    <Text className="my-2 mx-1 text-gray-100 font-bold text-l flex-wrap">
                        {title}
                    </Text>
                    <Text className="my-2 mx-1 text-gray-400 font-bold text-l">
                        {price} руб.
                    </Text>
                    <View className="flex-row items-center">
                        <Button
                            title="+"
                            onPress={() => dispatch(incrementCount(id))}
                        ></Button>
                        <Text className="text-white mx-2">{count}</Text>
                        <Button
                            title="-"
                            onPress={() => dispatch(decrementCount(id))}
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
        </View>
    );
};

export { CartItem };
