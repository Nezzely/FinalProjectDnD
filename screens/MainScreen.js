import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo";
import data from "../Data";

export default class MainScreen extends React.Component {
<<<<<<< HEAD
  NavCampaignForm = () => {
    //navigate to the form
  };
  NextScreenTemp = item => {
    this.props.navigation.navigate("Campaign");
=======
  constructor(props) {
    super(props);
    this.state = { campaignData: data.campaignList };
  }

  NextScreenTemp = itemName => {
    this.props.navigation.navigate("CampaignScreen", {
      campaignName: itemName
    });
>>>>>>> c240c082727eadbc95e0154ff458580a881ebfa1
  };
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
<<<<<<< HEAD
          this.NextScreenTemp(item);
=======
          this.NextScreenTemp(item.key);
>>>>>>> c240c082727eadbc95e0154ff458580a881ebfa1
        }}
      >
        <View style={styles.campaignItemView}>
          <Image
            style={styles.campaignPicture}
            source={{
              uri: item.image
            }}
          />
          <Text style={styles.campaignTitleText}>{item.key}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <LinearGradient
        colors={["#348AC7", "#7474BF"]}
        style={styles.linearGradient}
      >
        <FlatList
          style={styles.listView}
          data={this.state.campaignData}
          renderItem={this.renderItem}
        />
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
  TitleText: {
    color: "white",
    fontSize: 18,
    marginTop: 10
  },
  addCampaignButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 20
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
  }
});
