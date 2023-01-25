import {
    View,
    Text,
    Image,
    Button,
    Modal,
    Pressable,
    StyleSheet,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/cartSlice";

import { Toast } from "react-native-ui-lib";

import { fetchFullProductData } from "../../redux/slices/fullProductSlice";

const FullProductScreen = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    /* const [styleAddButton, setStyleAddButton] = React.useState({
        color: "bg-orange-500",
        text: "добавить",
    }); */
    const route = useRoute();

    const dispatch = useDispatch();

    React.useEffect(() => {
        try {
            dispatch(fetchFullProductData(route.params.id));
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    const fullProduct = useSelector((state) => state.fullProduct.fullProduct);
    const cartItems = useSelector((state) => state.cart.cartItems);

    const handlerAddProduct = () => {
        dispatch(addProduct(route.params));
        /* setStyleAddButton({
            color: "bg-lime-900",
            text: "добавлен в корзину",
        }); */
        setIsVisible(true);
    };

    return (
        <ScrollView className="bg-slate-900 p-4 h-full">
            <View className="w-full h-60 p-5">
                <Image
                    source={{
                        uri: fullProduct?.attributes.imageUrl,
                    }}
                    className="w-full h-full rounded-2xl my-5"
                />
            </View>
            <View className="items-center my-5">
                <Text className="my-2 text-gray-100 font-bold text-xl">
                    {fullProduct?.attributes.title}
                </Text>
                {
                    <Text className="my-2 text-gray-400 font-bold text-l">
                        {fullProduct?.attributes.description}
                    </Text>
                }
                {
                    <Text className="my-2 text-gray-400 font-bold text-l">
                        {fullProduct?.attributes.price} руб.
                    </Text>
                }
            </View>
            <View className="items-center">
                <Pressable
                    className={`bg-pink-900 rounded-lg w-1/2 items-center`}
                    onPress={() => handlerAddProduct()}
                >
                    <Text className="text-bold text-white text-lg">
                        Добавить в корзину
                    </Text>
                </Pressable>
            </View>
            <Toast
                visible={isVisible}
                position={"bottom"}
                autoDismiss={1000}
                onDismiss={() => setIsVisible(false)}
                message={"Товар добавлен в корзину"}
                backgroundColor={"#545CFC"}
            ></Toast>
        </ScrollView>
    );
};

export { FullProductScreen };
