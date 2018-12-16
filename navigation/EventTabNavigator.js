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
import OptionScreen from "../screens/Options/OptionScreen";

const EventStack = createStackNavigator({
  EventScreen: {
    screen: EventScreen, //Campaign Screen / EventList Screen
    navigationOptions: ({ navigation }) => ({
      //TODO: change the button to touchable opacity and make it an arrow back
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Campaign");
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
      title: `"EventName"` //TODO: Get the ClickedName
    })
  }
});

EventStack.navigationOptions = {
  tabBarLabel: "Events",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-list-box${focused ? "" : "-outline"}`
          : "md-list-box"
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: OptionScreen,

    navigationOptions: ({ navigation }) => ({
      title: "Options"
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
