import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  View,
  SafeAreaView,
  Text,
  Image,
} from 'react-native';
import styles from '../utility/Style';
import Constants from '../utility/Constant';
import SideIcon from '../assets/arrow.png';

const Header = (props) => {
  const {title, navigation} = props;
  return (
    <View style={{width: '100%'}}>
      <StatusBar
        backgroundColor={Constants.color}
        barStyle="dark-content"></StatusBar>
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      <View style={styles.header}>
        {navigation && (
          <TouchableOpacity
            style={styles.drawerButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Image source={SideIcon} style={styles.sideIcon}></Image>
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
