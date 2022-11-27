import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FleetList } from "../../../../components/FleetList";

export default function Feed() {
  const renderHeader = useCallback(() => {
    return (
      <View style={styles.header}>
        <Text style={styles.heading}>Feed</Text>
        <Text>Welcome to the feed!</Text>
        <Link href={"/modal"}>Show modal page</Link>
        <Link href={"/detail"}>Show detail page</Link>
        <Link href={"/profile"}>Show profile</Link>
      </View>
    );
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Feed",
        }}
      />
      <View style={styles.container}>
        <FleetList header={renderHeader} />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 5,
  },
  header: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
  },
});
