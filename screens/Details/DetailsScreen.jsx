import { ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useDispatch, useSelector } from "react-redux";
import { fetchDetailsListData } from "../../redux/slices/detailsSlice";

import { DetailsScreenItem } from "../../components/Details/DetailsScreenItem";

const DetailsScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    React.useEffect(() => {
        try {
            dispatch(fetchDetailsListData());
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    const detailsData = useSelector((state) => state.details.detailsList);

    return (
        <SafeAreaView className="bg-slate-900 h-full p-3">
            <ScrollView>
                {detailsData?.map((item) => (
                    <DetailsScreenItem
                        key={item.id}
                        navigation={navigation}
                        title={item.attributes.title}
                        description={item.attributes.description}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export { DetailsScreen };
