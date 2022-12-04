import { Stack } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FleetList } from "../../components/FleetList";
import { useProfile } from "../../store/hooks";

export default function SearchScreen({ route }) {
  const id = route.params.id;

  const profile = useProfile(id);

  if (!profile) return null;

  const { image, name, username } = profile;

  const header = (
    <View style={styles.header}>
      <Image source={{ uri: image }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.handle}>@{username}</Text>
    </View>
  );

  return (
    <>
      <Stack.Screen
        options={{
          title: username,
        }}
      />
      <FleetList header={header} profileId={id} />
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    borderRadius: 75,
    width: 150,
  },
  header: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    paddingVertical: 24,
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
  },
  name: {
    fontSize: 32,
    fontWeight: "700",
    marginTop: 16,
  },
  handle: {
    fontSize: 18,
    color: "rgb(83, 100, 113)",
    marginTop: 4,
  },
});
