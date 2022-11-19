import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Feed() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Feed",
          headerShown: false,
        }}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Feed</Text>
          <Text>Welcome to the feed!</Text>
          <Link href={"/modal"}>Show modal page</Link>
          <Link href={"/detail"}>Show detail page</Link>
          <Link href={"/profile"}>Show profile</Link>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
  },
});
