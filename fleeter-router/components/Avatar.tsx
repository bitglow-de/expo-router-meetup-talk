import React from "react";
import { Image, StyleSheet } from "react-native";

type AvatarProps = {
  imageUri: string;
};
export const Avatar: React.FC<AvatarProps> = ({ imageUri }) => (
  <Image source={{ uri: imageUri }} style={styles.avatar} />
);

const styles = StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    borderRadius: 24,
    width: 48,
  },
});
