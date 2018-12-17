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
                "https://cache.desktopnexus.com/thumbseg/841/841947-bigthumbnail.jpg"
            }}
          >
            <Icon.Ionicons
              name={Platform.OS === "ios" ? "ios-add-circle" : "md-add-circle"}
              size={42}
              style={{ marginLeft: 10 }}
              color={"white"}
            />
            <Text style={styles.Text}>New Event</Text>
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
                "https://227rsi2stdr53e3wto2skssd7xe-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/oldbrainstorm-e1454479398880-730x280.jpg"
            }}
          >
            <Icon.Ionicons
              name={Platform.OS === "ios" ? "ios-cog" : "md-cog"}
              size={42}
              style={{ marginLeft: 10 }}
              color={"white"}
            />
            <Text style={styles.Text}>Edit Campaign</Text>
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
                "https://2static1.fjcdn.com/comments/Quotspontaneous+combustion+is+a+myth+if+you+burst+into+flame+_15cabbe0b8ec336880a2c85266f6ca88.jpg"
            }}
          >
            <Icon.Ionicons
              name={Platform.OS === "ios" ? "ios-trash" : "md-trash"}
              size={42}
              style={{ marginLeft: 10 }}
              color={"white"}
            />
            <Text style={styles.Text}>Delete Campaign</Text>
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
