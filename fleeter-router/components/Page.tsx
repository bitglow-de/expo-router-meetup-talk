import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type PageProps = {
  title: string;
  description?: string;
};

export default function Page({ title, description }: PageProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
  },
});
