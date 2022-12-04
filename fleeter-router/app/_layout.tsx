import { DarkTheme } from "@react-navigation/native";
import { RootContainer, Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import { StoreProvider } from "../store/store";
import { renderHomeIcon } from "../utils/tabs";

export default function Root() {
  const colorScheme = useColorScheme();

  return (
    <StoreProvider>
      <RootContainer theme={colorScheme === "light" ? undefined : DarkTheme} />
      <Tabs screenOptions={{ headerShown: false }} initialRouteName="(feed)">
        <Tabs.Screen
          name="(feed)"
          options={{ title: "Home", tabBarIcon: renderHomeIcon }}
        />
      </Tabs>
    </StoreProvider>
  );
}
