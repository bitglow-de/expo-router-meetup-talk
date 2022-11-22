import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useProfile } from "../store/hooks";
import { Avatar } from "./Avatar";

type FleetProps = {
  id: string;
};

const color = "rgb(83, 100, 113)";
const size = 16;

export const Fleet: React.FC<FleetProps> = () => {
  const profile = useProfile("2");

  if (!profile) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Avatar imageUri={profile?.image} />
      <View style={styles.contentContainer}>
        <View style={styles.nameGroup}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.username}>{`@${profile.username}`}</Text>
        </View>
        <View style={styles.actionRow}>
          <FontAwesome name="comment-o" color={color} size={size} />
          <FontAwesome name="envelope-o" color={color} size={size} />
          <FontAwesome name="heart-o" color={color} size={size} />
          <FontAwesome name="share-square-o" color={color} size={size} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginTop: 20,
    width: "100%",
  },
  contentContainer: {
    flex: 1,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  nameGroup: {
    flex: 1,
    flexDirection: "row",
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 20,
  },
  username: {
    color: "rgb(83, 100, 113)",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    marginLeft: 4,
  },
});
