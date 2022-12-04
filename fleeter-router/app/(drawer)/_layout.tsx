import { Drawer } from "expo-router/drawer";
import React from "react";

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="(tabs)" options={{ drawerLabel: "Feed" }} />
      <Drawer.Screen
        name="my-profile"
        options={{ drawerLabel: "My Profile" }}
      />
    </Drawer>
  );
}
