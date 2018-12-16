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
import OptionScreen from "../screens/Options/OptionScreen";

const CampaignStack = createStackNavigator({
  CampaignScreen: {
    screen: CampaignScreen, //Campaign Screen / EventList Screen
    navigationOptions: ({ navigation }) => ({
      //TODO: change the button to touchable opacity and make it an arrow back
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
      title: `"CampaignName"`

      //TODO: Get the ClickedName
    })
  }
});

CampaignStack.navigationOptions = {
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
  CampaignStack,
  SettingsStack
});
