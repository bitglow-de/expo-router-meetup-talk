import React, { memo, useCallback } from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import { useProfiles } from "../store/hooks";
import { Profile as ProfileType } from "../types/profile";
import { ProfileListEntry } from "./ProfileListEntry";

const FeedItem = memo<ProfileType>((props) => <ProfileListEntry {...props} />);

type ProfileListProps = {
  header: React.ComponentType<any>;
};

export const ProfileList: React.FC<ProfileListProps> = ({ header }) => {
  const profiles = useProfiles();
  const renderProfile: ListRenderItem<ProfileType> = useCallback(
    ({ item: props }) => {
      return <FeedItem {...props} />;
    },
    []
  );

  return (
    <FlatList
      data={profiles}
      renderItem={renderProfile}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={header}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
