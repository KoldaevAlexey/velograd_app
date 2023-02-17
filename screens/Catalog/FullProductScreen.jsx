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

import { ExpandableSection } from "react-native-ui-lib";

import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/cartSlice";

import { Toast } from "react-native-ui-lib";
import { Carousel } from "react-native-ui-lib";

import { FullProductFeature } from "../../components/Catalog/FullProductFeature";

import { fetchFullProductData } from "../../redux/slices/fullProductSlice";

const FullProductScreen = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [showInfo, setShowInfo] = React.useState(false);
    /* const [styleAddButton, setStyleAddButton] = React.useState({
        color: "bg-orange-500",
        text: "добавить",
    }); */
    const route = useRoute();

    const { title, brakeType, price, description, imagesUrl } = route.params;
    console.log(brakeType);

    const dispatch = useDispatch();

    /* React.useEffect(() => {
        try {
            dispatch(fetchFullProductData(route.params.id));
        } catch (e) {
            console.log(e.message);
        }
    }, []); */

    /*  const fullProduct = useSelector((state) => state.fullProduct.fullProduct);
    const cartItems = useSelector((state) => state.cart.cartItems); */

    const handlerAddProduct = () => {
        dispatch(addProduct(route.params));
        /* setStyleAddButton({
            color: "bg-lime-900",
            text: "добавлен в корзину",
        }); */
        setIsVisible(true);
    };

    return (
        <ScrollView className="bg-slate-900 h-full">
            <View className="w-full h-80 p-1">
                {imagesUrl.length === 1 ? (
                    <Image
                        source={{
                            uri: imagesUrl[0],
                        }}
                        className="w-full h-full rounded-2xl"
                    />
                ) : (
                    <Carousel
                        containerStyle={{
                            height: 300,
                        }}
                        loop
                        showCounter
                    >
                        {imagesUrl.map((image, i) => (
                            <Image
                                key={i}
                                source={{
                                    uri: image,
                                }}
                                className="w-full h-full rounded-lg"
                            />
                        ))}
                    </Carousel>
                )}
            </View>
            <View className="items-center my-5">
                <Text className="my-2 text-gray-100 font-bold text-xl">
                    {title}
                </Text>

                <Text className="my-2 text-gray-400 font-bold text-sm p-4">
                    {description}
                </Text>
                <View className="w-11/12">
                    <ExpandableSection
                        expanded={showInfo}
                        sectionHeader={
                            <Text className="text-blue-400 text-xl text-left">
                                Характеристики
                            </Text>
                        }
                        children={<FullProductFeature feature={route.params} />}
                        onPress={() => setShowInfo(!showInfo)}
                    ></ExpandableSection>
                </View>

                <Text className="my-2 text-white font-bold text-xl">
                    цена {price} руб.
                </Text>
            </View>
            <View className="items-center mb-20">
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
