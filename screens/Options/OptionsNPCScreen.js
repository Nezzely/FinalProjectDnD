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

export default class OptionsEventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logOut = () => {
    this.props.navigation.navigate("AppEntry");
  };

  //TODO: Make text Readable or change background on buttons

  //TODO: Navigation to EditNpcScreen
  //TODO: Navigation to Event Via "Delete NPC"

  render() {
    return (
      <LinearGradient
        colors={["#348AC7", "#7474BF"]}
        style={styles.linearGradient}
      >
        <TouchableOpacity
          onPress={() => {
            this.logOut();
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
                "https://i.pinimg.com/originals/ee/29/5b/ee295b2d2be288d5ed836b03ad1fc7a2.jpg"
            }}
          >
            <Icon.Ionicons
              name={Platform.OS === "ios" ? "ios-cog" : "md-cog"}
              size={42}
              style={{ marginLeft: 10 }}
              color={"white"}
            />
            <Text style={styles.Text}>Edit NPC</Text>
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
                "https://i.pinimg.com/originals/54/42/cd/5442cd07eb8f767bca7f269607187596.jpg"
            }}
          >
            <Icon.Ionicons
              name={Platform.OS === "ios" ? "ios-trash" : "md-trash"}
              size={42}
              style={{ marginLeft: 10 }}
              color={"white"}
            />
            <Text style={styles.Text}>Delete NPC</Text>
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
