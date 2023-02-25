import { View, Text, Pressable, Image, Linking } from "react-native";
import React from "react";

const TestOpenWhatsAppWidget = () => {
    const url = "https://api.whatsapp.com/send?phone=79778475030";
    return (
        <Pressable onPress={() => Linking.openURL(url)}>
            <View className="w-14 h-14 mx-2">
                <Image
                    source={{
                        uri: "https://coolsen.ru/wp-content/uploads/2021/06/31-8.jpg",
                    }}
                    className="w-full h-full rounded-2xl"
                />
            </View>
        </Pressable>
    );
};

export { TestOpenWhatsAppWidget };
