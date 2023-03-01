import { View, Text, Image } from "react-native";
import React from "react";

import { ROOT_API_ROUTE } from "../../utils/consts";

import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

const TestHomeScreenCatalogItem = ({ imageUrl, title }) => {
    return (
        <View className="w-40 h-40 my-2 flex-col p-1 rounded-2xl justify-between items-center">
            <Image
                source={{
                    uri: imageUrl,
                }}
                className="w-full h-full rounded-2xl"
            />
            <Text className="text-white text-center text-base">{title}</Text>
        </View>
    );
};

const TestHomeScreenCatalog = () => {
    const [homeScreenCategories, setHomeScreenCategories] = React.useState();

    React.useEffect(() => {
        try {
            const fetchCategoriesData = async () => {
                const { data } = await axios.get(`${ROOT_API_ROUTE}categories`);
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
                    <TestHomeScreenCatalogItem
                        key={item.category.id}
                        title={item.category.title}
                        imageUrl={item.category.imageUrl}
                    />
                ))}
        </View>
    );
};

export { TestHomeScreenCatalog };
