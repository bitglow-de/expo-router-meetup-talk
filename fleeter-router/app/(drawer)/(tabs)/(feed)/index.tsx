import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fleet } from "../../../../components/Fleet";

export default function Feed() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Feed",
          headerShown: false,
        }}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Feed</Text>
          <Text>Welcome to the feed!</Text>
          <Link href={"/modal"}>Show modal page</Link>
          <Link href={"/detail"}>Show detail page</Link>
          <Link href={"/profile"}>Show profile</Link>
        </View>
        <Fleet id="1" />
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
  heading: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
  },
});
