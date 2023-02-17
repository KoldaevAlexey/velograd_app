import { View, Text } from "react-native";
import React from "react";

import { ExpandableSection } from "react-native-ui-lib";

import { StoreAddressesFullInfo } from "./StoreAddressesFullInfo";

const StoreAdressesList = ({ title, shops }) => {
    const [showInfo, setShowInfo] = React.useState(false);

    return (
        <View className="my-1">
            <ExpandableSection
                expanded={showInfo}
                sectionHeader={
                    <Text className="text-gray-100 text-2xl">{title}</Text>
                }
                children={<StoreAddressesFullInfo shops={shops} />}
                onPress={() => setShowInfo(!showInfo)}
            ></ExpandableSection>
        </View>
    );
};

export { StoreAdressesList };
