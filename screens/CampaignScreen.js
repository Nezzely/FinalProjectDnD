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
import data from "../Data";

export default class CampaignScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { campaignData: data.campaignDetails };
  }

  NextScreenTemp = itemName => {
    this.props.navigation.navigate("EventScreen", {
      eventName: itemName,
      campaignName: this.props.navigation.getParam("campaignName")
    });
  };
  renderSectionHeader = ({ section, index }) => {
    return <Text style={styles.TitleText}>{section.title}</Text>;
  };

  renderItem = obj => {
    //TODO: Replace the onPress function of the
    //TouchableOpacity with one passed in from this.props
    return (
      <TouchableOpacity
        onPress={() => {
          this.NextScreenTemp(obj.item.name);
        }}
      >
        <View style={styles.ItemView}>
          <Image
            style={styles.elementPicture}
            source={{
              uri: obj.item.image
            }}
          />
          <Text style={styles.TitleText}>{obj.item.name}</Text>
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
        <SectionList
          sections={this.state.campaignData}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.name + index}
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
