import { View, Text, Image } from "react-native";
import React from "react";

import { Carousel } from "react-native-ui-lib";

const StoreAddressesFullInfo = ({ shops }) => {
    return (
        <View>
            {shops.map((item) => (
                <View key={item.address}>
                    <View className="h-80">
                        <Text className="my-5 text-xl font-bold text-center text-white">
                            Фото магазина
                        </Text>
                        <Carousel
                            containerStyle={{
                                height: 300,
                            }}
                            loop
                            autoplay={false}
                        >
                            {item.imagesUrl.map((image, i) => (
                                <Image
                                    key={i}
                                    source={{
                                        uri: image,
                                    }}
                                    className="w-auto h-3/4 rounded-lg"
                                />
                            ))}
                        </Carousel>
                    </View>
                    <Text className="text-gray-100 text-xl my-1">
                        Адрес: {item.address}
                    </Text>
                    <Text className="text-gray-100 text-xl mb-10">
                        Режим работы: {item.openingHours}
                    </Text>
                </View>
            ))}
        </View>
    );
};

export { StoreAddressesFullInfo };
