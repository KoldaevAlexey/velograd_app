import { View, Text, ScrollView } from "react-native";
import React from "react";

import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchData } from "../../redux/slices/searchSlice";
import { sortingTypes } from "../../utils/sortingTypes";

import { Picker } from "@react-native-picker/picker";

import { Product } from "../../components/Catalog/Product";

const SearchScreen = ({ navigation }) => {
    const [selectedSorting, setSelectedSorting] = React.useState("asc");
    const route = useRoute();
    const dispatch = useDispatch();

    React.useEffect(() => {
        try {
            const title = route.params.value;
            dispatch(fetchSearchData({ title, selectedSorting }));
        } catch (e) {
            console.log(e.message);
        }
    }, [selectedSorting]);

    const products = useSelector((state) => state.search.searchProducts);

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
            <Text className="text-white text-lg text-center my-5">
                {route.params.value.toUpperCase()}
            </Text>
            <View className="flex-row flex-wrap">
                {products?.data.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        attributes={item.attributes}
                        navigation={navigation}
                    />
                ))}
            </View>
        </>
    );

    const nothingFound = (
        <Text className="text-white text-2xl text-center font-bold mt-52">
            По вашему запросу ничего не найдено
        </Text>
    );

    return (
        <ScrollView className="bg-slate-900 h-full">
            {products.data.length > 0 ? content : nothingFound}
        </ScrollView>
    );
};

export { SearchScreen };
