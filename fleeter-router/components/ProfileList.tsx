import React, { memo, useCallback } from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import profiles from "../repository/profiles.json";
import { Profile, ProfileProps } from "./Profile";

const FeedItem = memo<ProfileProps>((props) => <Profile {...props} />);

type ProfileListProps = {
  header: React.ComponentType<any>;
};

export const ProfileList: React.FC<ProfileListProps> = ({ header }) => {
  const renderProfile: ListRenderItem<ProfileProps> = useCallback(
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
