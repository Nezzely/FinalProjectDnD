import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Image
} from "react-native";
import { LinearGradient } from "expo";

export default class EventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignKey: this.props.navigation.getParam("campaignKey"),
      campaignName: this.props.navigation.getParam("campaignName"),
      eventKey: this.props.navigation.getParam("eventKey"),
      eventName: this.props.navigation.getParam("eventName"),
      NPCList: this.props.screenProps.eventScreenData
    };
  }

  NextScreenTemp = item => {
    this.props.navigation.navigate("NPCScreen", {
      NPCName: item.NPCName,
      eventName: this.props.navigation.getParam("eventName"),
      campaignName: this.props.navigation.getParam("campaignName")
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
          <Text style={styles.campaignTitleText}>{item.NPCName}</Text>
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
          data={this.state.NPCList}
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
