import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import data from "./Data";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    mainScreenData: data.applicationData,
    campaignScreenData: null,
    eventScreenData: null
  };

  searchStateDataKey = (stateData, key, dataType) => {
    for (var i = 0; i < stateData.length; i++)
      if (stateData[i]["key"] === key) return stateData[i][dataType];
    return null;
  };

  updateCampaignData = key => {
    let { mainScreenData } = this.state;
    let newData = this.searchStateDataKey(mainScreenData, key, "eventList");
    this.setState({ campaignScreenData: newData });
  };

  updateEventData = key => {
    let { campaignScreenData } = this.state;
    let newData = this.searchStateDataKey(campaignScreenData, key, "NPCList");
    this.setState({ eventScreenData: newData });
  };

  removeDataFromKey = (stateData, key) => {
    for (var i = 0; i < stateData.length; i++) {
      if (stateData[i]["key"] == key) {
        var tempArry = stateData;
        tempArry.splice(i, 1);

        for (var j = i; j < stateData.length; j++) {
          tempArry[j]["key"] = tempArry[j]["key"] - 1;
        }
        return tempArry;
      }
    }
  };

  removeCampaign = key => {
    let { mainScreenData } = this.state;
    let newArray = this.removeDataFromKey(mainScreenData, key);
    if (newArray != null)
      this.setState({
        mainScreenData: newArray
      });
  };

  removeEvent = key => {
    let { campaignScreenData } = this.state;
    let newArray = this.removeDataFromKey(campaignScreenData, key);
    if (newArray != null) this.setState({ campaignScreenData: newArray });
  };

  removeNPC = key => {
    let { eventScreenData } = this.state;
    let newArray = this.removeDataFromKey(eventScreenData, key);
    if (newArray != null) this.setState({ eventScreenData: newArray });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <SafeAreaView style={styles.safeViewContainer}>
            <AppNavigator
              screenProps={{
                mainScreenData: this.state.mainScreenData,
                campaignScreenData: this.state.campaignScreenData,
                eventScreenData: this.state.eventScreenData,
                updateCampaignData: this.updateCampaignData,
                updateEventData: this.updateEventData,
                removeCampaign: this.removeCampaign,
                removeEvent: this.removeEvent,
                removeNPC: this.removeNPC
              }}
            />
          </SafeAreaView>
        </View>
      );
    }
  }
  /*

*/
  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  safeViewContainer: {
    marginTop: Expo.Constants.statusBarHeight,
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
