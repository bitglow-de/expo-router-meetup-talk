import React, { memo, useCallback } from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import { Profile as ProfileType, useProfiles } from "../store/store";
import { Profile } from "./Profile";

const FeedItem = memo<ProfileType>((props) => <Profile {...props} />);

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
