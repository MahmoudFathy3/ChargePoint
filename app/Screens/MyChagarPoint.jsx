import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/COLORS";
import ChargePoints from "../../components/ChargePoints/ChargePoints";
import { useNavigation } from "expo-router";

const MyChagarPoint = () => {
  const [add_chargepoint, setAddChargePoint] = useState(false);
  let points = [
    { name: "point 1" },
    { name: "point 2" },
    { name: "point 3" },
    { name: "point 4" },
    { name: "point 5" },
    { name: "point 6" },
    { name: "point 7" },
  ];

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 10 }}
      >
        <Ionicons name="arrow-back" size={30} />
      </TouchableOpacity>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: 10,
          paddingBottom: 10,
        }}
      >
        {points.map((point, index) => (
          <View key={index} style={styles.chargePoint}>
            <View>
              <Text>{point.name}</Text>
            </View>

            <View style={styles.button}>
              <TouchableOpacity>
                <AntDesign name="delete" size={20} color={"brown"} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="edit" size={20} color={"blue"} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.bottom}
        onPress={() => setAddChargePoint(true)}
      >
        <Entypo name="plus" size={30} color={COLORS.WHITE} />
      </TouchableOpacity>
      {add_chargepoint && (
        <ChargePoints onClose={() => setAddChargePoint(false)} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: COLORS.ACCENT,
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 999,
  },
  chargePoint: {
    width: Dimensions.get("screen").width,
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export default MyChagarPoint;
