import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from "react-native";
import Header from "../components/Header";
import Constant from "../utility/Constant";
import styles from "../utility/Style";
import { getVideos, setLoading } from "../redux/action";
import { useSelector, useDispatch } from 'react-redux';
import Loader from "../components/Loader";
import * as Navigation from "../navigation/navigation";
import SpeechText from "../components/SpeechText";
import mike from "../assets/imgs/microphone.png";

const HomeScreen = () => {
    const list = useSelector(state => state.videos.list);
    const dispatch = useDispatch();

    const childRef = useRef();
    const [search, setSearch] = useState("");
    const [speechModal, setSpeechModal] = useState(false);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item}
            onPress={() =>
                Navigation.navigate('Detail', { video: item.video, name: item.title })
            }>
            <Image style={styles.img} source={item.thumUrl} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <SpeechText visible={speechModal}
                close={() => setSpeechModal(false)}
                submit={res => {
                    setSpeechModal(false);
                    if (res) {
                        dispatch(getVideos(res))
                    }
                }}
                ref={childRef} />
            <Loader />
            <Header title={"Home"} />
            <View style={styles.center}>
                <View style={{ flexDirection: "row" }}>
                    <TextInput style={styles.searchInput} value={search}
                        onChangeText={search => setSearch(search)}></TextInput>
                    <TouchableOpacity style={styles.submit}
                        onPress={() => {
                            if (search.length) {
                                dispatch(getVideos(search));
                            }
                        }}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={list}
                    contentContainerStyle={{ flexGrow: 1 }}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={(
                        <View style={styles.noData}>
                            <Text style={{ color: "black", fontSize: 16 }}>OOPS! Videos not found</Text>
                        </View>
                    )}
                />
            </View>
            <TouchableOpacity style={styles.mikeButton}
                onPress={() => {
                    setSpeechModal(true);
                    childRef.current.start();
                }}>
                <Image style={{ width: 30, height: 30, resizeMode: "contain" }}
                    source={mike}
                />
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen