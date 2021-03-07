import { View, StyleSheet, Dimensions } from "react-native";
import Constants from "./Constant";

export default StyleSheet.create({
    list: {
        width: "100%", height: 100,
        borderBottomWidth: 1,
        borderColor: "lightgray",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    listImage: {
        width: 120, height: 80,
        resizeMode: "cover"
    },
    listBtn: {
        backgroundColor: Constants.color,
        width: 120, height: 25, borderRadius: 12,
        justifyContent: "center", alignItems: "center"
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
        justifyContent: "center",
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