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

    const products = useSelector((state) => state.products.products);

    React.useEffect(() => {
        try {
            dispatch(fetchProductsData(route.params.title));
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    /* console.log(products.data); */

    return (
        <ScrollView className="bg-slate-900 h-full">
            <Text className="my-5 text-center font-bold text-xl text-white">
                {route.params.title}
            </Text>
            <View className="flex-row flex-wrap">
                {products?.data.map((item) => (
                    <Product
                        key={item.id}
                        navigation={navigation}
                        id={item.id}
                        attributes={item.attributes}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export { ProductsScreen };
