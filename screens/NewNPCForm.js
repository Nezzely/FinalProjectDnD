import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Picker,
  Button,
  TouchableOpacity
} from "react-native";

export default class NewNPCForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ bottom: "27%", height: 150, width: 150 }}
          source={{ uri: "https://img.icons8.com/metro/1600/plus-2-math.png" }}
        />
        <TextInput placeholder="Enter Character Name" style={styles.name} />

        <TextInput placeholder="Stats" multiline="true" style={styles.stats} />

        <TextInput
          placeholder="Description"
          multiline="true"
          style={styles.description}
        />

        <TouchableOpacity>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  stats: {
    top: "32%",
    fontFamily: "Serif",
    fontSize: 18,
    borderColor: "gray",
    borderWidth: "1",
    position: "absolute",
    paddingHorizontal: 20,
    width: "40%",
    left: "5%",
    height: "50%",
    flexWrap: "nowrap"
  },
  description: {
    top: "32%",
    fontFamily: "Serif",
    fontSize: 18,
    borderColor: "gray",
    borderWidth: "1",
    position: "absolute",
    paddingHorizontal: 20,
    width: "40%",
    left: "55%",
    height: "50%",
    flexWrap: "nowrap"
  },
  name: {
    bottom: "53%",
    fontFamily: "Serif",
    fontSize: 18,
    borderColor: "gray",
    borderWidth: "1",
    paddingHorizontal: 20
  },
  button: {
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: "1",
    borderColor: "gray",
    position: "absolute",
    bottom: -190,
    fontSize: 36
  }
});
