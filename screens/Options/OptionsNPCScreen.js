//CampaignScreen
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Image
} from "react-native";
import { LinearGradient } from "expo";

export default class OptionNPCScreen extends React.Component {
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
        <TouchableOpacity onPress={this.SignIn} style={styles.buttons}>
          <Text>Add Item</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.SignIn} style={styles.buttons}>
          <Text>Remove Item</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.SignIn} style={styles.buttons}>
          <Text>Edit Item</Text>
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
  container: {
    flex: 1,
    alignItems: "center"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    marginTop: 10
  },
  campaignItemView: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: 360,
    marginRight: 50,
    borderColor: "white",
    borderWidth: 2
  },
  campaignPicture: {
    width: 100,
    height: 100
  },
  campaignTitleText: {
    fontFamily: "serif",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
    fontSize: 18,
    marginLeft: 30
  },
  buttons: {
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    borderColor: "white",
    borderWidth: 0.5,
    width: 125
  }
});
