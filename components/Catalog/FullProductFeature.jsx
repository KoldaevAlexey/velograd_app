import { View, Text } from "react-native";
import React from "react";

const FullProductFeature = ({ feature }) => {
    const textStyle = "text-white text-sm my-1";
    const viewStyle = "flex-row justify-between";
    const {
        code,
        frameSizes,
        colors,
        numbersOfSpeed,
        rearTransmission,
        frontTransmission,
        shifters,
        system,
        cassette,
        brakeType,
        brakeName,
        rimName,
        nameTires,
        modelYear,
        frameMaterial,
        typeShockAbsorber,
        wheelDiameter,
    } = feature;
    return (
        <View className="w-full my-5 p-2 border-solid border-2 border-sky-500 rounded-md bg-slate-800">
            <View className={viewStyle}>
                <Text className={textStyle}>Код товара:</Text>
                <Text className={textStyle}>{code}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Размеры рамы:</Text>
                {frameSizes?.map((item, idx) => (
                    <Text key={idx} className={textStyle}>
                        {item}
                    </Text>
                ))}
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Цвета:</Text>
                {colors?.map((item, idx) => (
                    <Text key={idx} className={textStyle}>
                        {item}
                    </Text>
                ))}
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Количество скоростей:</Text>
                <Text className={textStyle}>{numbersOfSpeed}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Задний переключатель:{"   "}</Text>
                <Text className={textStyle}>{rearTransmission}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Передний переключатель:</Text>
                <Text className={textStyle}>{frontTransmission}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Манетки:</Text>
                <Text className={textStyle}>{shifters}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Система:</Text>
                <Text className={textStyle}>{system}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Кассета(трещотка):</Text>
                <Text className={textStyle}>{cassette}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Тип тормоза:</Text>
                <Text className={textStyle}>{brakeType}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Название тормоза:</Text>
                <Text className={textStyle}>{brakeName}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Покрышки:</Text>
                <Text className={textStyle}>{rimName}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Обода:</Text>
                <Text className={textStyle}>{nameTires}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Модельный год:</Text>
                <Text className={textStyle}>{modelYear}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Рама:</Text>
                <Text className={textStyle}>{frameMaterial}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Тип вилки:</Text>
                <Text className={textStyle}>{typeShockAbsorber}</Text>
            </View>
            <View className={viewStyle}>
                <Text className={textStyle}>Диаметр колес:</Text>
                <Text className={textStyle}>{wheelDiameter}</Text>
            </View>
        </View>
    );
};

export { FullProductFeature };
