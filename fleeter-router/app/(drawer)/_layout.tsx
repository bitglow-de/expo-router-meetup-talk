import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { StyleSheet, Text } from "react-native";

const FleeterDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.heading}>Menu</Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
    paddingLeft: 10,
  },
});

export default function Layout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={FleeterDrawerContent}
    >
      <Drawer.Screen name="(tabs)" options={{ drawerLabel: "Feed" }} />
      <Drawer.Screen
        name="my-profile"
        options={{ drawerLabel: "My Profile" }}
      />
    </Drawer>
  );
}
