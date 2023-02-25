import { View, Text, Image } from "react-native";
import React from "react";

import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

const TestHomeScreenCatalog = () => {
    const [homeScreenCategories, setHomeScreenCategories] = React.useState();

    React.useEffect(() => {
        try {
            const fetchCategoriesData = async () => {
                const { data } = await axios.get(
                    `http://10.0.2.2:1337/api/categories`
                );
                setHomeScreenCategories(data.data[0].attributes.categories);
            };
            fetchCategoriesData();
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    return (
        <View className="flex-row h-52">
            {homeScreenCategories &&
                homeScreenCategories.map((item) => (
                    <View
                        key={item.id}
                        className="w-40 h-40 my-2 flex-col p-1 rounded-2xl justify-between items-center"
                    >
                        <Image
                            source={{
                                uri: item.category.imageUrl,
                            }}
                            className="w-full h-full rounded-2xl"
                        />
                        <Text className="text-white text-center text-base">
                            {item.category.title}
                        </Text>
                    </View>
                ))}
        </View>
    );
};

export { TestHomeScreenCatalog };
