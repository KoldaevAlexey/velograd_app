import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../../redux/slices/productsSlice";

import { Product } from "../../components/Catalog/Product";

const ProductsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const route = useRoute();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    React.useEffect(() => {
        try {
            console.log(route.params.title);
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    return (
        <ScrollView className="bg-slate-900 h-full">
            <Text className="my-5 text-center font-bold text-xl text-white">
                {/* route.params.title */}
            </Text>
            <View className="flex-row flex-wrap">
                {/* items.map((item) => (
                    <Product
                        key={item.id}
                        {...item}
                        navigation={navigation}
                    />
                )) */}
            </View>
        </ScrollView>
    );
};

export { ProductsScreen };
