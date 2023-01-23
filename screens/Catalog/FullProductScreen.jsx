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

import {
    Dialog,
    PanningProvider,
    Colors,
    Constants,
} from "react-native-ui-lib";

import { fetchFullProductData } from "../../redux/slices/fullProductSlice";

const FullProductScreen = () => {
    //const [isVisible, setIsVisible] = React.useState(false);
    const [styleAddButton, setStyleAddButton] = React.useState({
        color: "bg-orange-500",
        text: "добавить",
    });
    const route = useRoute();

    //const [modalVisible, setModalVisible] = React.useState(false);

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
        setStyleAddButton({
            color: "bg-lime-900",
            text: "добавлен в корзину",
        });
    };

    /* const showDialog = () => {
        setIsVisible(true);
    };

    const closeDialog = () => {
        setIsVisible(false);
    }; */

    return (
        <ScrollView className="bg-slate-900 p-4 h-full">
            {/* <Dialog
                visible={isVisible}
                onDismiss={() => console.log("dismissed")}
                panDirection={PanningProvider.Directions.LEFT}
                overlayBackgroundColor={"grey"}
                containerStyle={styles.dialog}
            >
                <View className="flex-col my-10 items-center">
                    <Text className="text-center font-bold text-2xl">
                        {fullProduct?.attributes.title} добавлен в корзину
                    </Text>
                    <View className="mt-5 w-1/2">
                        <Button
                            title="OK"
                            onPress={() => closeDialog()}
                        ></Button>
                    </View>
                </View>
            </Dialog> */}

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
                    className={`${styleAddButton.color} rounded-lg w-1/2 items-center`}
                    onPress={() => handlerAddProduct()}
                >
                    <Text className="text-bold text-white text-lg">
                        {styleAddButton.text}
                    </Text>
                </Pressable>
            </View>
            {/*  <View>
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
                </View> */}
        </ScrollView>
    );
};

export { FullProductScreen };

const styles = StyleSheet.create({
    dialog: {
        backgroundColor: "white",
        borderRadius: 12,
        height: 200,
    },
});
