import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import MainScreen from "../screens/MainScreen";
import OptionsMainScreen from "../screens/Options/OptionsMainScreen";
import NewCampaignForm from "../screens/NewForms/NewCampaignForm";

const MainStack = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Campaign List"
    })
  }
});

MainStack.navigationOptions = {
  tabBarLabel: "Main",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios" ? `ios-map${focused ? "" : "-outline"}` : "md-map"
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: OptionsMainScreen,

    navigationOptions: ({ navigation }) => ({
      title: "Main Options"
    })
  },
  NewCampaign: {
    screen: NewCampaignForm,
    navigationOptions: ({ navigation }) => ({
      title: "New Campaign"
    })
  }
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Options",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  MainStack,
  SettingsStack
});
