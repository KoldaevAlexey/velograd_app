import { View, Text, ScrollView } from "react-native";
import React from "react";

import { useRoute } from "@react-navigation/native";

const WarrantyScreen = () => {
    const route = useRoute();

    const { headerInfo, footerInfo, bikesWarranty } = route.params.description;

    return (
        <ScrollView className="bg-slate-900 h-full p-5">
            <Text className="text-white text-center text-xl my-5">
                {route.params.title}
            </Text>
            <Text className="text-white text-left text-ml">{headerInfo}</Text>
            <View className="p-5">
                {bikesWarranty.map((item) => (
                    <View
                        key={item.id}
                        className="my-1 p-2 border-solid border-2 border-sky-500 rounded-md"
                    >
                        <Text className="text-white font-bold text-center">
                            {item.brand}
                        </Text>
                        <View className="justify-between flex-row">
                            <Text className="text-white font-bold">
                                На раму:
                            </Text>
                            <Text className="text-white font-bold">
                                {item.warrantyPeriods.frame}
                            </Text>
                        </View>
                        <View className="justify-between flex-row">
                            <Text className="text-white font-bold">
                                На оборудование
                            </Text>
                            <Text className="text-white font-bold">
                                {item.warrantyPeriods.equipment}
                            </Text>
                        </View>
                        {item.warrantyPeriods.battery && (
                            <View className="justify-between flex-row">
                                <Text className="text-white font-bold">
                                    На батарею
                                </Text>

                                <Text className="text-white font-bold">
                                    {item.warrantyPeriods.battery}
                                </Text>
                            </View>
                        )}
                    </View>
                ))}
            </View>
            <Text className="text-white text-left text-ml">{footerInfo}</Text>
        </ScrollView>
    );
};

export { WarrantyScreen };
