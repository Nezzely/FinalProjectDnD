//CampaignScreen
import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform
} from "react-native";
import { LinearGradient, Icon } from "expo";

export default class OptionsMainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        colors={["#348AC7", "#7474BF"]}
        style={styles.linearGradient}
      >
        <TouchableOpacity
          onPress={() => {
            true;
          }}
          style={styles.buttonLogout}
        >
          <ImageBackground
            style={styles.picture}
            source={{
              uri:
                "https://i.pinimg.com/originals/fd/4e/45/fd4e45965dfd930cd9ef69d965185951.jpg"
            }}
          >
            <Icon.Ionicons
              name={Platform.OS === "ios" ? "ios-log-out" : "md-log-out"}
              size={42}
              style={{ marginLeft: 10 }}
              color={"white"}
            />
            <Text style={styles.Text}>Logout</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            true;
          }}
          style={styles.buttonLogout}
        >
          <ImageBackground
            style={styles.picture}
            source={{
              uri:
                "https://i.pinimg.com/736x/97/32/8a/97328a368e0cec5e22882a53f7bb689c--fairy-art-fantasy-books.jpg"
            }}
          >
            <Icon.Ionicons
              name={Platform.OS === "ios" ? "ios-add-circle" : "md-add-circle"}
              size={42}
              style={{ marginLeft: 10 }}
              color={"white"}
            />
            <Text style={styles.Text}>New Campaign</Text>
          </ImageBackground>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center"
  },
  picture: {
    width: 300,
    height: 100,
    alignItems: "center",
    flexDirection: "row"
  },
  Text: {
    fontFamily: "serif",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
    fontSize: 18,
    marginLeft: 10
  },
  buttons: {
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    borderColor: "white",
    borderWidth: 0.5,
    width: 125
  },
  buttonLogout: {
    margin: 10,
    borderColor: "white",
    borderWidth: 0.5
  }
});
