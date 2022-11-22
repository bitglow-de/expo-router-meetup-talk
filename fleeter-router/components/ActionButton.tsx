import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type IconProps = React.ComponentProps<typeof FontAwesome>;
type ActionButtonProps = IconProps & {
  count?: number;
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  count,
  ...props
}) => {
  const defaultIconColor = "rgb(83, 100, 113)";
  const defaultIconSize = 16;
  return (
    <View style={styles.container}>
      <FontAwesome color={defaultIconColor} size={defaultIconSize} {...props} />
      {count ? <Text style={styles.countLabel}>{count}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  countLabel: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "300",
  },
});
