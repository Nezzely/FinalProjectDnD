import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { LinearGradient } from "expo";
import data from "../Data";

export default class CampaignScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignKey: props.navigation.getParam("campaignKey"),
      campaignName: this.props.navigation.getParam("campaignName"),
      eventList: this.props.screenProps.campaignScreenData
    };
  }

  NextScreenTemp = item => {
    this.props.screenProps.updateEventData(item.key);
    this.props.navigation.navigate("EventScreen", {
      campaignKey: this.state.campaignKey,
      campaignName: this.state.campaignName,
      eventKey: item.key,
      eventName: item.eventName,
      NPCList: item.NPCList
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
          <Text style={styles.campaignTitleText}>{item.eventName}</Text>
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
          data={this.state.eventList}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </LinearGradient>
    );
  }

  /*
  renderSectionHeader = ({ section, index }) => {
    return <Text style={styles.TitleText}>{section.title}</Text>;
  };

  renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.NextScreenTemp(obj);
        }}
      >
        <View style={styles.ItemView}>
          <Image
            style={styles.elementPicture}
            source={{
              uri: obj.image
            }}
          />
          <Text style={styles.TitleText}>{obj.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  keyExtractor = (item, index) => item.key.toString();

  render() {
    console.log(this.state.eventList);
    return (
      <LinearGradient
        colors={["#348AC7", "#7474BF"]}
        style={styles.linearGradient}
      >
        <SectionList
          sections={this.state.eventList}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </LinearGradient>
    );
  }*/
}

const styles = StyleSheet.create({
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
  },
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
  ItemView: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: 360,
    marginRight: 50,
    borderColor: "white",
    borderWidth: 2
  },
  elementPicture: {
    width: 100,
    height: 100
  },
  TitleText: {
    fontFamily: "serif",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
    fontSize: 18,
    marginLeft: 30
  }
});
