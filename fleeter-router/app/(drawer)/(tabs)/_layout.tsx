import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { renderHomeIcon, renderSearchIcon } from "../../../utils/tabs";

export default function TabPages() {
  return (
    <>
      <Drawer.Screen options={{ drawerLabel: "Home" }} />
      <Tabs screenOptions={{ headerShown: false }} initialRouteName="(feed)">
        <Tabs.Screen
          name="(feed)"
          options={{ title: "Home", tabBarIcon: renderHomeIcon }}
        />
        <Tabs.Screen
          name="search"
          options={{ title: "Search", tabBarIcon: renderSearchIcon }}
        />
      </Tabs>
    </>
  );
}
