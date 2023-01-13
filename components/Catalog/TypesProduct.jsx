import { View, Text } from "react-native";
import React from "react";
import axios from "axios";

import { TypesProductItem } from "./TypesProductItem";

const TypesProduct = ({ navigation }) => {
    const [typesProduct, setTypesProduct] = React.useState(null);

    React.useEffect(() => {
        try {
            const fetchTypesProductData = async () => {
                const { data } = await axios.get(
                    "http://10.0.2.2:1337/api/types-products"
                );
                setTypesProduct(data.data);
            };
            fetchTypesProductData();
        } catch (e) {
            console.log(e.response.data);
        }
    }, []);

    return (
        <View>
            {typesProduct?.map((item) => (
                <TypesProductItem
                    key={item.id}
                    title={item.attributes.title}
                    imageUrl={item.attributes.imageUrl}
                    navigation={navigation}
                />
            ))}
        </View>
    );
};

export { TypesProduct };
