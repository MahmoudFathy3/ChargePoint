import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { TextInput } from "react-native-paper";
import { COLORS } from "../../constants/COLORS";

const UpdateProfile = ({ onClose }) => {
  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.updateProfile}>
      <KeyboardAvoidingView behavior="padding">
        <TouchableOpacity onPress={onClose} style={{ padding: 10 }}>
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>

        {/* <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        > */}
        <View style={styles.form}>
          <TextInput
            label="Name"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="Email"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            keyboardType="number-pad"
            label="Phone Number"
            value={""}
            onChangeText={""}
            style={styles.input}
          />
          <TextInput
            label="Country"
            value={""}
            onChangeText={""}
            style={styles.input}
          />

          <View style={styles.Button}>
            <TouchableOpacity style={styles.Save}>
              <Text style={styles.SaveText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </Pressable>
  );
};

UpdateProfile.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  updateProfile: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 9999999,
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
  Button: {
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  Save: {
    backgroundColor: COLORS.SECONDARY,
    padding: 10,
    borderRadius: 5,
    width: "30%",
  },
  SaveText: {
    fontWeight: "bold",
    color: COLORS.WHITE,
    textAlign: "center",
  },
});

export default UpdateProfile;
