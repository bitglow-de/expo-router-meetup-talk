import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useProfile, useToggleFollow } from "../store/hooks";

export const Profile: React.FC<{ id: string }> = ({ id }) => {
  const profile = useProfile(id);
  const toggleFollow = useToggleFollow(id);

  console.log("render");

  if (!profile) {
    return null;
  }

  const { image, name, username, isFollowing } = profile;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.avatar} />
      <View style={styles.metadata}>
        <View style={styles.nameGroup}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.username}>{`@${username}`}</Text>
        </View>
        <View>
          <Pressable
            style={isFollowing ? styles.unfollowButton : styles.followButton}
            onPress={toggleFollow}
          >
            <Text
              style={isFollowing ? styles.unfollowLabel : styles.followLabel}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    borderRadius: 24,
    width: 48,
  },
  container: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 15,
  },
  followButton: {
    backgroundColor: "rgb(29, 34, 38)",
    borderRadius: 16,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  followLabel: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 20,
  },
  nameGroup: {
    flex: 1,
  },
  metadata: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  unfollowButton: {
    borderColor: "rgb(207, 217, 222)",
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  unfollowLabel: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 16,
  },
  username: {
    color: "rgb(83, 100, 113)",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
  },
});
