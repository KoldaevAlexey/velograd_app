import { View, Text, ScrollView } from "react-native";
import React from "react";

import { StoreAdressesList } from "../../components/Details/StoreAdressesList";

import { useRoute } from "@react-navigation/native";

const StoreAddressesScreen = () => {
    const route = useRoute();

    const { cities } = route.params.description;

    return (
        <ScrollView className="bg-slate-900 h-full p-2">
            <Text className="text-gray-100 text-2xl p-2 text-center">
                Адреса магазинов
            </Text>
            {cities.map((item) => (
                <StoreAdressesList
                    key={item.id}
                    title={item.title}
                    shops={item.shops}
                />
            ))}
        </ScrollView>
    );
};

export { StoreAddressesScreen };
