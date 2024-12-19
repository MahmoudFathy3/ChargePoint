import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function NotFoundPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page Not Found</Text>
      <Button
        title="Go Back to Home"
        onPress={() => navigation.navigate("WelcomePage")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
});
