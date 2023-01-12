import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../../redux/slices/productsSlice";
import { ScrollView } from "react-native-gesture-handler";

import { Product } from "../../components/Catalog/Product";

const ProductsScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    React.useEffect(() => {
        try {
            dispatch(fetchProductsData());
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    const route = useRoute();

    //const items = useSelector((state) => state.items.items);
    //console.log(route.params);

    //items = items.filter((item) => item.attributes.type === route.params.attributes.type);
    return (
        <ScrollView className="bg-slate-900 h-full">
            <Text className="my-5 text-center font-bold text-xl text-white">
                {route.params.title}
            </Text>
            <View className="flex-row flex-wrap">
                {/* items.map((item) => (
                    <Item
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
