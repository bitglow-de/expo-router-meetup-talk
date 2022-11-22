import { Stack } from "expo-router";
import React from "react";
import { StoreProvider } from "../store/store";

export default function Root() {
  return (
    <StoreProvider>
      <Stack screenOptions={{ headerShown: false, presentation: "modal" }} />
    </StoreProvider>
  );
}
