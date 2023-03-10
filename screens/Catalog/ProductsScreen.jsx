import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import { sortingTypes } from "../../utils/sortingTypes";

import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../../redux/slices/productsSlice";

import { Product } from "../../components/Catalog/Product";

import { Picker } from "@react-native-picker/picker";

const ProductsScreen = ({ navigation }) => {
    const [selectedSorting, setSelectedSorting] = React.useState("asc");
    const dispatch = useDispatch();
    const route = useRoute();

    const products = useSelector((state) => state.products.products);

    React.useEffect(() => {
        try {
            const title = route.params.title;
            dispatch(fetchProductsData({ title, selectedSorting }));
        } catch (e) {
            console.log(e.message);
        }
    }, [selectedSorting]);

    const content = (
        <>
            <View className="mt-2 mx-2 w-52 h-10">
                <Picker
                    selectedValue={selectedSorting}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedSorting(itemValue)
                    }
                    mode={"dialog"}
                    style={{ color: "white" }}
                    dropdownIconColor={"white"}
                    dropdownIconRippleColor={"white"}
                >
                    {sortingTypes.map((item, idx) => (
                        <Picker.Item
                            key={idx}
                            label={item.title}
                            value={item.value}
                        />
                    ))}
                </Picker>
            </View>
            <Text className="my-5 text-center font-bold text-xl text-white">
                {route.params.title}
            </Text>
            <View className="flex-row flex-wrap">
                {products?.data.map((item) => (
                    <Product
                        key={item.id}
                        navigation={navigation}
                        id={item.id}
                        attributes={item.attributes}
                    />
                ))}
            </View>
        </>
    );

    const productsEmpty = (
        <Text className="text-white text-2xl text-center font-bold mt-52">
            ?????????? ????????????, ?????????? ??????????????
        </Text>
    );

    return (
        <ScrollView className="bg-slate-900 h-full">
            {products.data.length > 0 ? content : productsEmpty}
        </ScrollView>
    );
};

export { ProductsScreen };
