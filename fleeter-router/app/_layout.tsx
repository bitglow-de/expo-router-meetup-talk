import { DarkTheme } from "@react-navigation/native";
import { RootContainer, Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import { StoreProvider } from "../store/store";

export default function Root() {
  const colorScheme = useColorScheme();

  return (
    <StoreProvider>
      <RootContainer theme={colorScheme === "light" ? undefined : DarkTheme} />
      <Stack screenOptions={{ headerShown: false, presentation: "modal" }} />
    </StoreProvider>
  );
}
