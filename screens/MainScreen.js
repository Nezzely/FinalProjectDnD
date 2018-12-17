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
  NavCampaignForm = () => {
    //navigate to the form
  };
  NextScreenTemp = itemName => {
    this.props.navigation.navigate("CampaignScreen", {
      campaignName: itemName
    });
  };
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.NextScreenTemp(item.key);
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
          data={[
            {
              key: "The Eye of the World",
              image:
                "https://s3-us-west-2.amazonaws.com/tabs.web.media/b/7/b7rb/b7rb-square-1536.jpg"
            },
            {
              key: "The Great Hunt",
              image:
                "https://s3-us-west-2.amazonaws.com/tabs.web.media/b/7/b7rc/b7rc-square-1536.jpg"
            },
            {
              key: "The Dragon Returns",
              image:
                "https://kbimages1-a.akamaihd.net/7aa3ed12-3c4f-4d56-ba37-931708133ff4/1200/1200/False/the-dragon-reborn-7.jpg"
            },
            {
              key: "The Shadow Rising",
              image:
                "https://kbimages1-a.akamaihd.net/636adc65-9392-4aaa-8bee-d884df6d1442/1200/1200/False/the-shadow-rising-3.jpg"
            },
            {
              key: "The Fire of Heaven",
              image:
                "https://kbimages1-a.akamaihd.net/d045b921-f10c-4ac2-9d08-5a0f9c0a58aa/353/569/90/False/the-fires-of-heaven-4.jpg"
            },
            {
              key: "Lord of Chaos",
              image:
                "https://s3-us-west-2.amazonaws.com/tabs.web.media/b/7/b7mo/b7mo-square-1536.jpg"
            },
            {
              key: "A Crown of Swords",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/61R6W9zBrlL._AA300_.jpg"
            }
          ]}
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
