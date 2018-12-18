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

  //TODO: Navigation to AddNPCScreen
  //TODO: Navigation to EditEventScreen
  //TODO: Navigation to CampaignScreen Via "delete Event"
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
            source={{ uri: "http://i.imgur.com/sWgaN46.jpg" }}
          >
            <Icon.Ionicons
              name={Platform.OS === "ios" ? "ios-add-circle" : "md-add-circle"}
              size={42}
              style={{ marginLeft: 10 }}
              color={"white"}
            />
            <Text style={styles.Text}>Edit Event</Text>
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
            source={{ uri: "http://dnd.wizards.com/sites/default/files/media/styles/second_hubpage_banner/public/images/characters/EN_Classes_Fighter_Header.jpg?itok=Nj1H1mla"}}
          >
            <Icon.Ionicons
              name={Platform.OS === "ios" ? "ios-cog" : "md-cog"}
              size={42}
              style={{ marginLeft: 10 }}
              color={"white"}
            />
            <Text style={styles.Text}>Add NPC</Text>
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
            source={{ uri: "https://magazine.artstation.com/wp-content/uploads/2016/05/David_Baldwin-1024x424.jpg" }}
          >
            <Icon.Ionicons
              name={Platform.OS === "ios" ? "ios-trash" : "md-trash"}
              size={42}
              style={{ marginLeft: 10 }}
              color={"white"}
            />
            <Text style={styles.Text}>Delete Event</Text>
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
