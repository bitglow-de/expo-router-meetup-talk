import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProfileList } from "../../components/ProfileList";

export default function SearchScreen() {
  const renderHeader = useCallback(() => {
    return (
      <View style={styles.header}>
        <Text style={styles.heading}>Search</Text>
        <Text>Search profiles...</Text>
      </View>
    );
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Search",
        }}
      />
      <View style={styles.container}>
        <ProfileList header={renderHeader} />
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
