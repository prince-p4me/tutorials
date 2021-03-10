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
import SideIcon from '../assets/imgs/arrow.png';
import * as Navigation from "../navigation/navigation";

const Header = (props) => {
  const { title, back } = props;

  console.log("back", back);
  return (
    <View style={{ width: '100%' }}>
      <StatusBar
        backgroundColor={Constants.color}
        barStyle="dark-content"></StatusBar>
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      <View style={styles.header}>
        {back && (
          <TouchableOpacity
            style={styles.drawerButton}
            activeOpacity={0.7}
            onPress={() => Navigation.goBack()}>
            <Image source={SideIcon} style={styles.sideIcon}></Image>
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
