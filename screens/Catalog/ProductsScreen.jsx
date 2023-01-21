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

    React.useEffect(() => {
        try {
            dispatch(fetchProductsData());
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    const products = useSelector((state) => state.products.products);

    const filteredProducts = products?.filter(
        (item) => item.attributes.type === route.params.title
    );

    return (
        <ScrollView className="bg-slate-900 h-full">
            <Text className="my-5 text-center font-bold text-xl text-white">
                {route.params.title}
            </Text>
            <View className="flex-row flex-wrap">
                {filteredProducts?.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        title={item.attributes.title}
                        imageUrl={item.attributes.imageUrl}
                        price={item.attributes.price}
                        navigation={navigation}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export { ProductsScreen };
