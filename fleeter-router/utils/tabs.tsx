import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

export const renderSearchIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return <AntDesign name="search1" color={props.color} size={props.size} />;
};

export const renderHomeIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return <AntDesign name="home" color={props.color} size={props.size} />;
};
