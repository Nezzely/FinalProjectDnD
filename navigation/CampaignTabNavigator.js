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
import OptionsEventScreen from "../screens/Options/OptionsEventScreen";

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
<<<<<<< HEAD
      title: "'Events List'"

      //TODO: Get the ClickedName
=======
      title: navigation.getParam("campaignName", "Error")
>>>>>>> c240c082727eadbc95e0154ff458580a881ebfa1
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
          ? `ios-list${focused ? "" : "-outline"}`
          : "md-list"
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: OptionsEventScreen,

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
