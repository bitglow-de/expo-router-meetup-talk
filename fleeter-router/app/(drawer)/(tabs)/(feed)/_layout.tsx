import { Stack, Tabs } from "expo-router";
import React from "react";
import { renderHomeIcon } from "../../../../utils/tabs";

export default function FeedStack() {
  return (
    <>
      <Tabs.Screen options={{ title: "Home", tabBarIcon: renderHomeIcon }} />
      <Stack />
    </>
  );
}
