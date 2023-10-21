import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#3A3737",
  },
  ContainerButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40%",
  },
  Button: {
    width: 250,
    height: 45,
    backgroundColor: "#E30613",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  SubContainer: {
    width: "100%",
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  TextTitle: {
    fontSize: 23,
    color: "white",
    textAlign: "center",
  },
  ContainerNavBar: {
    width: "100%",
    height: 40,
    backgroundColor: "gray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
