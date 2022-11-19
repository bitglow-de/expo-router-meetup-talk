import { Drawer } from "expo-router/drawer";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src";

const FleeterDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ paddingLeft: 10 }}>
        <Text style={styles.heading}>Menu</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
  },
});

export default function Layout() {
  return <Drawer drawerContent={FleeterDrawerContent} />;
}
