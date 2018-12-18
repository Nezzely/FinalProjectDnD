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
            this.EditNPC();
          }}
          style={styles.buttonLogout}
        >
          <ImageBackground
            style={styles.picture}
            source={{ uri: "https://static.tvtropes.org/pmwiki/pub/images/Blacksmith_hammering_2883.jpg" }}
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
            source={{ uri: "https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/rf/image_908w/2010-2019/WashingtonPost/2013/08/23/National-Enterprise/Images/TS-Was7837184.jpg&w=480"}}
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
