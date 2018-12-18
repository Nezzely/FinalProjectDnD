import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Picker,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo";

export default class NewCampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "", text: "" };
  }

  onSubmit = () => {
    this.props.navigation.navigate("MainScreen");
  };

  render() {
    return (
      <LinearGradient
        colors={["#348AC7", "#7474BF"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <Image
            style={{ bottom: "34%", right: "30%", height: 150, width: 150 }}
            source={{
              uri: "https://img.icons8.com/metro/1600/plus-2-math.png"
            }}
          />
          <TextInput placeholder="Enter Campaign Name" style={styles.name} />
          <Text style={{ right: "0%", bottom: "42.5%" }}>Game Length:</Text>
          <Picker
            itemStyle={{ fontSize: 12 }}
            style={{ left: "30%", bottom: "60%", width: 140, height: 10 }}
          >
            <Picker.Item label="Short (6-8 hours)" value="short" />
            <Picker.Item label="Medium (8-12 hours)" value="med" />
            <Picker.Item label="Long (12+ hours)" value="long" />
          </Picker>
          <TextInput
            placeholder="Enter Campaign Description"
            multiline={true}
            style={styles.description}
          />

          <TouchableOpacity
            style={styles.touchableButton}
            onPress={() => {
              this.onSubmit();
            }}
          >
            <Text style={styles.button}>Submit</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  description: {
    top: "32%",
    //fontFamily: "Serif",
    fontSize: 18,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    position: "absolute",
    paddingHorizontal: 20,
    width: "90%",
    height: "50%"
    //flexWrap: "nowrap"
  },
  name: {
    bottom: "53%",
    left: "18%",
    //fontFamily: "Serif",
    fontSize: 18,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 20
  },
  touchableButton: {},
  button: {
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "black",
    position: "absolute",
    bottom: -190,
    fontSize: 36
  }
});
