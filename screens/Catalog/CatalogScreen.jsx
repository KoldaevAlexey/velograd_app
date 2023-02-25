import { View, Text, TextInput, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Categories } from "../../components/Catalog/Categories";
import { SearchInput } from "../../components/Search/SearchInput";

const CatalogScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerRight: () => (
                <Button
                    onPress={() => alert("This is a button!")}
                    title="Info"
                    color="#fff"
                />
            ),
        });
    }, []);

    return (
        <SafeAreaView className="bg-slate-900 h-full p-5">
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <SearchInput navigation={navigation} />
            </View>
            <Categories navigation={navigation} />
        </SafeAreaView>
    );
};

export { CatalogScreen };
