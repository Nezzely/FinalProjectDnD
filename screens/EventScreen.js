import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";

export default class EventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  NextScreenTemp = () => {
    this.props.navigation.navigate("NPC");
  };

  render() {
    return (
      <LinearGradient
        colors={["#348AC7", "#7474BF"]}
        style={styles.linearGradient}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.NextScreenTemp();
          }}
        >
          <Text>Touch me for NPC Screen</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    borderColor: "white",
    borderWidth: 0.5,
    width: 125
  },
  container: {
    flex: 1,
    alignItems: "center"
  }
});
