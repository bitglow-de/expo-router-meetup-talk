import { Stack, Tabs } from "expo-router";

export default function FeedStack() {
  return (
    <>
      <Tabs.Screen options={{ title: "Home" }} />
      <Stack />
    </>
  );
}
