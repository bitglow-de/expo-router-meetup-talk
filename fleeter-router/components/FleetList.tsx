import React, { memo, useCallback } from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import { useFleets } from "../store/hooks";
import { Fleet as FleetType } from "../types/fleet";
import { Fleet } from "./Fleet";

const FeedItem = memo<FleetType>((props) => <Fleet {...props} />);

type ProfileListProps = {
  header: React.ComponentType<any>;
  profileId?: string;
};

export const FleetList: React.FC<ProfileListProps> = ({
  header,
  profileId,
}) => {
  const fleets = useFleets(profileId);
  const renderFleet: ListRenderItem<FleetType> = useCallback(
    ({ item: props }) => {
      return <FeedItem {...props} />;
    },
    []
  );

  return (
    <FlatList
      data={fleets}
      renderItem={renderFleet}
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
