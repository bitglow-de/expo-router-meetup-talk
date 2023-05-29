import { useProfile } from "@/store/hooks";
import { Fleet as FleetType } from "@/types/fleet";
import { deriveTimestamp } from "@/utils/date";
import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import Markdown from "react-native-marked";
import { ActionButton } from "./ActionButton";
import { Avatar } from "./Avatar";

export const Fleet: React.FC<FleetType> = ({
  profileId,
  metadata,
  content,
  isoPublishDate,
}) => {
  const profile = useProfile(profileId);
  const hours = useMemo(
    () => deriveTimestamp(isoPublishDate),
    [isoPublishDate]
  );

  if (!profile) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Avatar imageUri={profile.image} />
      <View style={styles.contentContainer}>
        <View style={styles.nameGroup}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.username}>{`@${profile.username}`}</Text>
          <Text style={styles.username}>{`•`}</Text>
          <Text style={styles.username}>{`${hours}`}</Text>
        </View>
        <View style={styles.fleetContent}>
          <Markdown
            value={content}
            styles={{ container: { marginBottom: 0 } }}
          />
        </View>
        <View style={styles.actionRow}>
          <ActionButton name="comment-o" count={metadata.comments} />
          <ActionButton name="retweet" count={metadata.refleets} />
          <ActionButton name="heart-o" count={metadata.likes} />
          <ActionButton name="share-square-o" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    width: "80%",
  },
  container: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 15,
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  fleetContent: {
    marginTop: 4,
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 20,
  },
  nameGroup: {
    flex: 1,
    flexDirection: "row",
  },
  username: {
    color: "rgb(83, 100, 113)",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    marginLeft: 4,
  },
});
