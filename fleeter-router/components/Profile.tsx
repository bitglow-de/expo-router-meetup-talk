import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export type ProfileProps = {
  image: string;
  name: string;
  username: string;
  isFollowing: boolean;
};

export const Profile: React.FC<ProfileProps> = ({
  image,
  name,
  username,
  isFollowing,
}) => {
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
    borderWidth: 1,
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
