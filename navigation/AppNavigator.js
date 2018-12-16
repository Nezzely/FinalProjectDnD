import React from "react";
import { createSwitchNavigator } from "react-navigation";

import AppEntryScreen from "../screens/AppEntryScreen";
import MainTabNavigator from "./MainTabNavigator";
import CampaignTabNavigator from "./CampaignTabNavigator";
import EventTabNavigator from "./EventTabNavigator";
import NPCTabNavigator from "./NPCTabNavigator";

export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AppEntry: AppEntryScreen,
    Main: MainTabNavigator,
    Campaign: CampaignTabNavigator,
    Event: EventTabNavigator,
    NPC: NPCTabNavigator
  },
  {
    initialRouteName: "AppEntry"
  }
);
