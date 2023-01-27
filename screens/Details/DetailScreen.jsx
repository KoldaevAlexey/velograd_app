import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { fetchDetailsData } from "../../redux/slices/detailsSlice";

import { DetailsScreenItem } from "../../components/Details/DetailsScreenItem";

const DetailsScreen = ({ navigation }) => {
    //const navigation = useNavigation();
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    React.useEffect(() => {
        try {
            dispatch(fetchDetailsData());
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    const detailsData = useSelector((state) => state.details.details);

    return (
        <SafeAreaView className="bg-slate-900 h-full p-3">
            <ScrollView>
                {detailsData?.map((item) => (
                    <DetailsScreenItem
                        key={item.id}
                        navigation={navigation}
                        title={item.attributes.title}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export { DetailsScreen };
