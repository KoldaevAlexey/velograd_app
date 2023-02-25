import { View, Text, Image } from "react-native";
import React from "react";

import { brands } from "../../assets/mockData/data";

const TestBrandsHomeScreen = () => {
    return (
        <View className="flex-row flex-wrap justify-around">
            {brands.map((item) => (
                <View key={item.id} className="w-44 h-8 my-1">
                    <Image
                        source={{
                            uri: item.urlImage,
                        }}
                        className="w-full h-full rounded-2xl"
                    />
                </View>
            ))}
        </View>
    );
};

export { TestBrandsHomeScreen };
