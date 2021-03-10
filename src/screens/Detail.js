import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Header from '../components/Header';
import styles from '../utility/Style';
import Video from 'react-native-video';
const Detail = ({ route, navigation, props }) => {
    const { width } = Dimensions.get('window');
    const { height } = Dimensions.get('window');
    const { name } = route;
    const onLoadStart = () => {
        // alert('Start');
    };

    const onEnd = () => {
        // alert('End');
    };
    return (
        <View style={styles.container}>
            <Header title={route.name} back={true} />
            <Video
                // source={this.props.video}
                resizeMode="cover"
                style={{ width, height: height }}
                controls={true}
                onLoadStart={onLoadStart}
                onEnd={onEnd}
            />
        </View>
    );
};
export default Detail;