import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Header from "../components/Header";
import Constant from "../utility/Constant";
import styles from "../utility/Style";
import { getVideos, setLoading } from "../redux/action";
import { connect } from 'react-redux';
import Loader from "../components/Loader";

class HomeScreen extends React.Component {
    state = {
        search: ""
    }

    render() {
        const { search } = this.state;
        const { route, navigation, list } = this.props;
        return (
            <View style={styles.container}>
                <Loader />
                <Header title={route.name} />
                <View style={styles.center}>
                    <View style={{ flexDirection: "row" }}>
                        <TextInput style={styles.searchInput} value={search}
                            onChangeText={search => this.setState({ search })}></TextInput>
                        <TouchableOpacity style={styles.submit}
                            onPress={() => this.props.getVideos(search)}>
                            <Text style={{ color: "white", fontWeight: "bold" }}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ videos }) => ({
    list: videos.list,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getVideos: (data) => dispatch(getVideos(data)),
        setLoading: (data) => dispatch(setLoading(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
