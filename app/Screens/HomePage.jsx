import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  Dimensions,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Drawer from "../../components/Drawer/Drawer";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Map from "../../components/Map/Map";
import { ContextUser } from "../../context/ContextProvider";
import Storage from "expo-storage";
import { GETDATA } from "../../hook/MethodAPI";

function HomePage() {
  const [open_drawer, setOpenDrawer] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const { handlerUsers, user } = useContext(ContextUser);

  useEffect(() => {
    const getUser = async () => {
      const getStorage = await Storage.getItem({ key: "email" });
      if (getStorage && handlerUsers) {
        GETDATA("Users", handlerUsers);
      }
    };

    getUser();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Add the button for opening the drawer */}
        <View style={styles.title_home}>
          <View style={styles.icon_drawer}>
            <TouchableOpacity onPress={handleOpenDrawer} style={{ width: 35 }}>
              <MaterialIcons name="menu-open" size={35} />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            style={styles.filter_map}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
              gap: 8,
            }}
          >
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
          </ScrollView>
        </View>

        <View style={styles.map}>
          {/* {!loading ? (
            <ActivityIndicator size="large" color={"#6200ee"} />
          ) : ( */}
          <Map />
          {/* )} */}
        </View>
        <StatusBar hidden={false} />
      </SafeAreaView>

      {open_drawer && (
        <Drawer isOpen={open_drawer} closeDrawer={() => setOpenDrawer(false)} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 10 : 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title_home: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  icon_drawer: {
    width: "40%",
    height: 50,
    justifyContent: "center",
    textAlign: "left",
    marginHorizontal: 10,
  },
  filter_map: {
    width: "60%",
    height: "100%",
  },
  map: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height - 95,
  },
});

export default HomePage;
