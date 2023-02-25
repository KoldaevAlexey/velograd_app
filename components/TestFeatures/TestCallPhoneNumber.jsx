import { View, Text, Linking, Pressable } from "react-native";
import React from "react";

const TestCallPhoneNumber = () => {
    const phoneNumber = "+74950216794";

    return (
        <Pressable onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
            <Text className="text-white text-lg">Связаться с КЦ</Text>
        </Pressable>
    );
};

export { TestCallPhoneNumber };
