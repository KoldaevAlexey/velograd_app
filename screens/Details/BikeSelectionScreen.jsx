import { View, Text, ScrollView } from "react-native";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchBikeSelectionData } from "../../redux/slices/detailsSlice";

import { BikeSelectionItem } from "../../components/Details/BikeSelectionItem";

const BikeSelectionScreen = ({ navigation }) => {
    const bikeSelectionData = useSelector(
        (state) => state.details.bikeSelection
    );
    const dispatch = useDispatch();

    React.useEffect(() => {
        try {
            dispatch(fetchBikeSelectionData());
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    return (
        <ScrollView className="bg-slate-900 h-full p-5">
            {bikeSelectionData?.map((item) => (
                <BikeSelectionItem
                    key={item.id}
                    title={item.attributes.title}
                    id={item.id}
                    navigation={navigation}
                />
            ))}
        </ScrollView>
    );
};

export { BikeSelectionScreen };
