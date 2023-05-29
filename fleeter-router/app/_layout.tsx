import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import { StoreProvider } from "../store/store";

export default function Root() {
  const colorScheme = useColorScheme();

  return (
    <StoreProvider>
      <ThemeProvider value={colorScheme === "light" ? DefaultTheme : DarkTheme}>
        <Stack screenOptions={{ headerShown: false, presentation: "modal" }} />
      </ThemeProvider>
    </StoreProvider>
  );
}
