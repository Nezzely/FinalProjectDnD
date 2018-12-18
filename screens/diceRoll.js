import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Constants } from "expo";

// // You can import from local files
// import AssetExample from './components/AssetExample';

// // or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { diceroll: 0 };
  }

  componentDidUpdate() {}

  componentWillUpdate() {}

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

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Event Name" style={styles.title} />
        <TouchableOpacity
          style={styles.touchable}
          hitSlop={{ top: 80, bottom: 80, left: 80, right: 80 }}
          onPress={this.rolld2}
        >
          <Text style={styles.buttonD2}>D2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          hitSlop={{ top: 80, bottom: 80, left: 80, right: 80 }}
          onPress={this.rolld4}
        >
          <Text style={styles.buttonD4}>D4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          hitSlop={{ top: 80, bottom: 80, left: 80, right: 80 }}
          onPress={this.rolld10}
        >
          <Text style={styles.buttonD10}>D10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          hitSlop={{ top: 80, bottom: 80, left: 80, right: 80 }}
          onPress={this.rolld20}
        >
          <Text style={styles.buttonD20}>D20</Text>
        </TouchableOpacity>
        <Text style={styles.dicetitle}>Roll result:</Text>
        <Text style={styles.rolltitle}>{this.state.diceroll}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  title: {
    right: "30%",
    bottom: "35%",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  dicetitle: {
    right: "1%",
    bottom: "55%",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  rolltitle: {
    right: "1%",
    bottom: "55%",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonD2: {
    bottom: "100%",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
    width: 80,
    height: 80,
    left: "%",
    position: "absolute"
  },
  buttonD4: {
    bottom: "80%",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
    width: 80,
    height: 80,
    left: "%",
    position: "absolute"
  },
  buttonD10: {
    top: -240,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
    width: 80,
    height: 80,
    left: "345%",
    position: "absolute"
  },
  buttonD20: {
    top: -223,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
    width: 80,
    height: 80,
    left: "345%",
    position: "absolute"
  },
  touchable: {
    width: 80,
    height: 80,
    alignItems: "center"
  }
});
