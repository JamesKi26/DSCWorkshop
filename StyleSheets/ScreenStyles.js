import { StyleSheet } from "react-native"

const screenStyles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        textAlign: "center",
        fontSize: 30,
        color: "#fff",
        margin: 15,
    },

    text: {
        color: "#fff",
        fontSize: 16,
        margin: 10,
    },

    buttonContainer: {
        width: "70%",
        margin: 25,
        padding: 20,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        fontSize: 16,
        color: "#fff"
    },

    keyboard:{
        flex: 1, 
        flexDirection: "row", 
        alignItems: "center",
        margin: 5,

    },

    input: {
        borderWidth: 2,
        borderRadius: 10,
        width: 300,
        height: 250,
        borderColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: "center",
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 18,
        marginVertical: 5,
        color: "#fff",
        fontStyle: "italic"
    },
})

export { screenStyles };
