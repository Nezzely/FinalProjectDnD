import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Image,
  TextInput
} from "react-native";
import { LinearGradient } from "expo";
//TODO: Fix the list so it is centered
//TODO: in Data.js change the pictures so that they all have the, / look good
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
      campaignName: this.props.navigation.getParam("campaignName"),
      diceroll: 0
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
  rolld2 = () => {
    let roll = Math.floor(Math.random() * 2 + 1);
    this.setState({ diceroll: roll });
  };
  rolld4 = () => {
    let roll = Math.floor(Math.random() * 4 + 1);
    this.setState({ diceroll: roll });
  };
  rolld10 = () => {
    let roll = Math.floor(Math.random() * 10 + 1);
    this.setState({ diceroll: roll });
  };
  rolld20 = () => {
    let roll = Math.floor(Math.random() * 20 + 1);
    this.setState({ diceroll: roll });
  };

  keyExtractor = (item, index) => item.key.toString();

  render() {
    return (
      <LinearGradient
        colors={["#348AC7", "#7474BF"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <View style={styles.topRow}>
            <TouchableOpacity
              style={styles.touchable}
              //hitSlop={{ top: 80, bottom: 80, left: 80, right: 80 }}
              onPress={this.rolld2}
            >
              <Text style={styles.buttonD2}>D2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              //hitSlop={{ top: 80, bottom: 80, left: 80, right: 80 }}
              onPress={this.rolld10}
            >
              <Text style={styles.buttonD10}>D10</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomRow}>
            <TouchableOpacity
              style={styles.touchable}
              //hitSlop={{ top: 80, bottom: 80, left: 80, right: 80 }}
              onPress={this.rolld4}
            >
              <Text style={styles.buttonD4}>D4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              //hitSlop={{ top: 80, bottom: 80, left: 80, right: 80 }}
              onPress={this.rolld20}
            >
              <Text style={styles.buttonD20}>D20</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.dicetitle}>Roll result:</Text>
          <Text style={styles.rolltitle}>{this.state.diceroll}</Text>
        </View>
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
  },
  listView: {
    width: "100%",
    flex: 3
  },

  //help me
  container: {
    flex: 1,
    width: "100%",
    height: "50%",
    //justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between"
  },
  bottomRow: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between"
  },
  title: {
    right: "30%",
    bottom: "35%",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  dicetitle: {
    //right: "1%",
    //bottom: "55%",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  rolltitle: {
    //right: "1%",
    //bottom: "55%",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonD2: {
    //bottom: "100%",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    width: 80,
    height: 80
    //left: "%",
    //position: "absolute"
  },
  buttonD4: {
    //bottom: "80%",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    width: 80,
    height: 80
    //left: "%",
    //position: "absolute"
  },
  buttonD10: {
    //top: -240,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    width: 80,
    height: 80
    //left: "345%"
    // position: "absolute"
  },
  buttonD20: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    width: 80,
    height: 80
    // left: "345%"
    // position: "absolute"
  },
  touchable: {
    width: 80,
    height: 80,
    alignItems: "center"
  }
});
