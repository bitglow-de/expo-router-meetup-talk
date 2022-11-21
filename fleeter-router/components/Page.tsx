import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type PageProps = {
  title: string;
  description?: string;
};

export default function Page({ title, description }: PageProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
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
