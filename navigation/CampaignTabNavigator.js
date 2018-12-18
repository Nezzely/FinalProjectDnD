import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { Icon } from "expo";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Colors from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import CampaignScreen from "../screens/CampaignScreen";
import OptionsCampaignScreen from "../screens/Options/OptionsCampaignScreen";
import NewEventForm from "../screens/NewForms/NewEventForm";

const CampaignStack = createStackNavigator({
  CampaignScreen: {
    screen: CampaignScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <Icon.Ionicons
            name={
              Platform.OS === "ios"
                ? "ios-arrow-back-outline"
                : "md-arrow-round-back"
            }
            size={42}
            style={{ marginLeft: 10 }}
            color={Colors.backArrow}
          />
        </TouchableOpacity>
      ),
      title: "Campaign: " + navigation.getParam("campaignName", "Error")
    })
  }
});

CampaignStack.navigationOptions = {
  tabBarLabel: "Campaign",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-list${focused ? "" : "-outline"}`
          : "md-list"
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: OptionsCampaignScreen,

    navigationOptions: ({ navigation }) => ({
      title: "Campaign Options"
    })
  },
  NewEvent: {
    screen: NewEventForm,
    navigationOptions: ({ navigation }) => ({
      title: "New Event"
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
  CampaignStack,
  SettingsStack
});
