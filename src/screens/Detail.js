import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import styles from "../utility/Style";

const Detail = ({ route, navigation }) => {
    const { name } = route;
    return (
        <View style={styles.container}>
            <Header title={name} navigation={navigation} />
            <View style={styles.center}>
                <Text>This is the {name} screen</Text>
            </View>
        </View>
    );
};
export default Detail;