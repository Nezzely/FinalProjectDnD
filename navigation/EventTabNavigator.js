import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { Icon } from "expo";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Colors from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import EventScreen from "../screens/EventScreen";
import OptionsEventScreen from "../screens/Options/OptionsEventScreen";

const EventStack = createStackNavigator({
  EventScreen: {
    screen: EventScreen, //Campaign Screen / EventList Screen
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CampaignScreen", {
              campaignName: navigation.getParam("campaignName")
            });
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
      title: "Event: " + navigation.getParam("eventName", "Error")
    })
  }
});

EventStack.navigationOptions = {
  tabBarLabel: "Event",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-document${focused ? "" : "-outline"}`
          : "md-document"
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: OptionsEventScreen,

    navigationOptions: ({ navigation }) => ({
      title: "Event Options"
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
  EventStack,
  SettingsStack
});
