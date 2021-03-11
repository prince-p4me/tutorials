import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Header from '../components/Header';
import styles from '../utility/Style';
import Video from 'react-native-video';
import * as Navigation from '../navigation/navigation';
const Detail = ({ route }) => {
    const { width } = Dimensions.get('window');
    const { height } = Dimensions.get('window');
    const { name } = route;
    const onLoadStart = () => {
        // alert('Start');
    };

    const onEnd = () => {
        // alert('End');
        Navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Header title={route.params.name} back={true} />
            <Video
                source={route.params.video}
                resizeMode="cover"
                style={{ width, height, backgroundColor: "black" }}
                controls={true}
                onLoadStart={onLoadStart}
                onEnd={onEnd}
                resizeMode="contain"
            />
        </View>
    );
};
export default Detail;