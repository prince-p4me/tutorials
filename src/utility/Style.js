import { View, StyleSheet, Dimensions } from "react-native";
import Constants from "./Constant";

export default StyleSheet.create({
    submit: {
        backgroundColor: Constants.color,
        width: 100, height: 45, borderColor: "black",
        borderTopWidth: 1,
        justifyContent: "center", alignItems: "center"
    },
    searchInput: {
        height: 45, flex: 1,
        borderWidth: 1, borderColor: "grey",
        padding: 5
    },
    header: {
        height: 45, width: "100%",
        backgroundColor: Constants.color,
        justifyContent: "center",
        alignItems: "center"
    },
    drawerButton: {
        width: 45, height: 45,
        position: "absolute",
        // backgroundColor: "white",
        left: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    title: { fontWeight: "700", fontSize: 16, color: "white" },
    safeArea: { backgroundColor: Constants.color, width: "100%" },
    center: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        // backgroundColor: "yellow"
    },
    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "flex-start",
        // backgroundColor: "red",
    },
    sideIcon: { width: 30, height: 30, resizeMode: "contain", tintColor: "white" }
})