import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function TabPages() {
  return (
    <>
      <Drawer.Screen options={{ drawerLabel: "Home" }} />
      <Tabs screenOptions={{ headerShown: false }} />
    </>
  );
}
