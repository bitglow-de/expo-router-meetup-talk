import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Detail() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Detail",
        }}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Detail Page</Text>
          <Text>Welcome to the detail page!</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
  },
});
