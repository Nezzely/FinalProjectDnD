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

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mainScreenData: props.screenProps.mainScreenData };
  }

  NextScreenTemp = item => {
    this.props.screenProps.updateCampaignData(item.key);
    this.props.navigation.navigate("CampaignScreen", {
      campaignName: item.campaignName,
      campaignKey: item.key,
      eventList: item.eventList
    });
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.NextScreenTemp(item);
        }}
      >
        <View style={styles.campaignItemView}>
          <Image
            style={styles.campaignPicture}
            source={{
              uri: item.image
            }}
          />
          <Text style={styles.campaignTitleText}>{item.campaignName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  keyExtractor = (item, index) => item.key.toString();

  render() {
    return (
      <LinearGradient
        colors={["#348AC7", "#7474BF"]}
        style={styles.linearGradient}
      >
        <FlatList
          style={styles.listView}
          data={this.state.mainScreenData}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
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
