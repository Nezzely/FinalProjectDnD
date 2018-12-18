import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert
} from "react-native";
import { LinearGradient } from "expo";
export default class AppEntryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtBox_Email: "",
      txtBox_Password: "",
      txtBox_CreateEmail: "",
      txtBox_CreatePassword: "",
      txtBox_ConfirmPassword: "",
      switch_Login: true,
      LoginCreate_Toggle: true
    };
  }
  //TODO: User Validation for SignUp
  Login = () => {
    this.setState({
      LoginCreate_Toggle: true
    });
  };

  Create = () => {
    this.setState({
      LoginCreate_Toggle: false
    });
  };

  SignIn = () => {
    //TODO: Write sign-in function
    //can probably just navigate to the next page
    this.props.navigation.navigate("Main");
  };

  SignUp = () => {
    //TODO: Write sign-up function
    //maybe just display a success message and not do anything
    Alert.alert(
      'Sign up successful',
      'User successfully created!'
    )
    this.setState({LoginCreate_Toggle: true})
  };

  LoginCreate_ViewToggle = () => {
    if (this.state.LoginCreate_Toggle)
      return (
        <View style={styles.textfieldView}>
          <TextInput
            style={styles.textInputs}
            placeholder={"Username"}
            onChangeText={txtBox_Email => this.setState({ txtBox_Email })}
            value={this.state.txtBox_Email}
          />
          <TextInput
            style={styles.textInputs}
            marginBottom={12}
            placeholder={"Password"}
            onChangeText={txtBox_Password => this.setState({ txtBox_Password })}
            value={this.state.txtBox_Password}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={this.SignIn} style={styles.buttons}>
            <Text>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.plainText}>Keep me logged in</Text>
          <Switch
            onValueChange={switch_Login => this.setState({ switch_Login })}
            value={this.state.switch_Login}
          />
        </View>
      );
    else
      return (
        <View style={styles.textfieldView}>
          <TextInput
            style={styles.textInputs}
            placeholder={"Username"}
            onChangeText={txtBox_CreateEmail =>
              this.setState({ txtBox_CreateEmail })
            }
            value={this.state.txtBox_CreateEmail}
          />
          <TextInput
            style={styles.textInputs}
            placeholder={"Password"}
            onChangeText={txtBox_CreatePassword =>
              this.setState({ txtBox_CreatePassword })
            }
            value={this.state.txtBox_CreatePassword}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.textInputs}
            marginBottom={12}
            placeholder={"Confirm Password"}
            onChangeText={txtBox_ConfirmPassword =>
              this.setState({ txtBox_ConfirmPassword })
            }
            value={this.state.txtBox_ConfirmPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={this.SignUp} style={styles.buttons}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      );
  };

  render() {
    return (
      <LinearGradient
        colors={["#348AC7", "#7474BF"]}
        style={styles.linearGradient}
      >
        <View style={styles.headerView}>
          <Text style={styles.headerText}>
            <Text>D&D{"\n"}</Text>
            <Text>Dungeon Master{"\n"}</Text>
            <Text>Management Tool</Text>
          </Text>
        </View>
        <View style={styles.buttonsView}>
          <TouchableOpacity onPress={this.Login} style={styles.buttons}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Create} style={styles.buttons}>
            <Text>Create Account</Text>
          </TouchableOpacity>
        </View>
        {this.LoginCreate_ViewToggle()}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    textAlign: "center"
  },
  linearGradient: {
    flex: 1,
    alignItems: "center"
    //justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: "center"
    // justifyContent: "center"
  },
  headerView: {
    margin: 12
  },
  buttonsView: {
    width: 250,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  textfieldView: {
    width: 250,
    alignItems: "center",
    justifyContent: "space-evenly"
    //borderColor: "white",
    //borderWidth: 2
  },
  headerText: {
    textAlign: "center",
    color: "white",
    fontSize: 24
  },
  plainText: {
    textAlign: "center",
    color: "white",
    margin: 12
  },
  textInputs: {
    height: 45,
    width: 250,
    margin: 15,
    paddingHorizontal: 20,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white"
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 125,
    borderColor: "white",
    borderWidth: 0.5
  }
});
