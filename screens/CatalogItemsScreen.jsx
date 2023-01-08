import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsData } from "../redux/slices/itemsSlice";

import { itemsData } from "../assets/mockData/data";

import { CatalogItem } from "../components/CatalogItem";
import { ScrollView } from "react-native-gesture-handler";

const CatalogItemsScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    React.useEffect(() => {
        try {
            dispatch(fetchItemsData());
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    const route = useRoute();

    const items = useSelector((state) => state.items.items);
    //console.log(route.params);

    //items = items.filter((item) => item.attributes.type === route.params.attributes.type);
    return (
        <ScrollView className="bg-slate-900 h-full">
            <Text className="my-5 text-center font-bold text-xl text-white">
                {route.params.title}
            </Text>
            <View className="flex-row flex-wrap">
                {/* items.map((item) => (
                    <CatalogItem
                        key={item.id}
                        {...item}
                        navigation={navigation}
                    />
                )) */}
            </View>
        </ScrollView>
    );
};

export { CatalogItemsScreen };
