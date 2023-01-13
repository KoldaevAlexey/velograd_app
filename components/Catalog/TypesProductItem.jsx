import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

const TypesProductItem = ({ navigation, title }) => {
    const [typesProducts, setTypesProducts] = React.useState(null);

    React.useEffect(() => {
        try {
            const fetchTypesData = async () => {
                const { data } = await axios.get(
                    "http://10.0.2.2:1337/api/types-products"
                );
                setTypesProducts(data.data);
            };
            fetchTypesData();
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    console.log(typesProducts);

    const route = useRoute();
    //console.log(route.params);

    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};

export { TypesProductItem };
