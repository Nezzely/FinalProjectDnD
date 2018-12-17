import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { Icon } from "expo";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Colors from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import NPCScreen from "../screens/NPCScreen";
import OptionsNPCScreen from "../screens/Options/OptionsNPCScreen";

const NPCStack = createStackNavigator({
  NPCScreen: {
    screen: NPCScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EventScreen", {
              eventName: navigation.getParam("eventName"),
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
      title: "NPC: " + navigation.getParam("NPCName")
    })
  }
});

NPCStack.navigationOptions = {
  tabBarLabel: "NPCs",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-person${focused ? "" : "-outline"}`
          : "md-person"
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: OptionsNPCScreen,

    navigationOptions: ({ navigation }) => ({
      title: "NPC Options"
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
  NPCStack,
  SettingsStack
});
