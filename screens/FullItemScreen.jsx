import { View, Text, Image, Button, Modal, Pressable } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

import { itemsData } from "../assets/mockData/data";

const FullItemScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    const route = useRoute();

    console.log(route.params);

    return (
        <SafeAreaView className="bg-slate-900 h-full p-2">
            <ScrollView className="h-full">
                <Image
                    source={{
                        uri: route.params.img,
                    }}
                    className="w-full h-full rounded-2xl my-5"
                />
                <View className="items-center my-5">
                    <Text className="my-2 text-gray-100 font-bold text-xl">
                        {route.params.title}
                    </Text>

                    <Text className="my-2 text-gray-400 font-bold text-l">
                        {route.params.description}
                    </Text>
                    <Text className="my-2 text-gray-400 font-bold text-l">
                        {route.params.price} руб.
                    </Text>
                </View>
                <Button
                    title="В корзину"
                    onPress={() => dispatch(addItem(route.params))}
                ></Button>
                <View>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View className="bg-slate-600 items-center justify-center flex-1">
                            <View>
                                <Text className="text-white font-bold text-xl mx-10">
                                    Товар {route.params.title} добавлен в
                                    корзину!
                                </Text>
                                <Pressable
                                    onPress={() =>
                                        setModalVisible(!modalVisible)
                                    }
                                >
                                    <Text className="text-white my-10 text-l text-center">
                                        ОКЕЙ!
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export { FullItemScreen };
