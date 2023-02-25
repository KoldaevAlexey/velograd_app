import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

import { TypesProductItem } from "./TypesProductItem";

const TypesProduct = ({ navigation }) => {
    const [typesProduct, setTypesProduct] = React.useState(null);
    const route = useRoute();

    React.useEffect(() => {
        try {
            setTypesProduct(route.params.typesProduct);
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    return (
        <ScrollView>
            <View className="flex-row flex-wrap justify-around">
                {typesProduct?.map((item, idx) => (
                    <TypesProductItem
                        key={idx}
                        title={item.title}
                        imageUrl={item.imageUrl}
                        navigation={navigation}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export { TypesProduct };
