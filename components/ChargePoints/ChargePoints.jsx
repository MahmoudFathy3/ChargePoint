import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { Button, TextInput } from "react-native-paper";
import { COLORS } from "./../../constants/COLORS";

const ChargePoints = ({ onClose }) => {
  return (
    <View style={styles.charge}>
      <TouchableOpacity onPress={onClose} style={{ padding: 10 }}>
        <Ionicons name="arrow-back" size={30} />
      </TouchableOpacity>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Text style={styles.title}>Add Charge Points</Text>
        {/* Add your charge points here */}
        <View style={styles.form}>
          <TextInput
            label="Password"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="Location"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <Button mode="contained" style={{ backgroundColor: COLORS.ACCENT }}>
            Add New Charge Point
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  charge: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 9999999,
  },
  content: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
  },
  form: {
    marginTop: 50,
    marginHorizontal: 20,
    gap: 20,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK,
    borderWidth: 1,
    borderColor: "#eee",
  },
});

ChargePoints.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ChargePoints;
