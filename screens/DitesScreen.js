import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Platform,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { DitesSongsList } from "../ScreenSongs/DitesSongList";




const flag333 = require("../images/flag-333.webp");
const flag777 = require("../images/flag-777.webp");

const LesDites = ({ navigation }) => {
  
  return (
    <LinearGradient
      colors={["#9840a9", "#24056f", "#532cab"]}
      style={{ flex: 1 }}
    >
      <StatusBar translucent backgroundColor={"transparent"} />

      <View
        style={{
          flexDirection: "row",
          marginTop: Platform.OS === "ios" ? 70 : 50,
          paddingHorizontal: 10,
          borderBottomWidth: 0.2,
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../images/back-white.webp")}
            style={{ height: 50, width: 50, marginRight: 6 }}
          />
          {/* <Text style={{ fontSize: 19, color: "#ffffff",marginTop:10 }}>Medistoris.cat</Text> */}
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 18,
            color: "#ffffff",
            fontWeight: "500",
            marginLeft: "20%",
            marginTop: 10,
          }}
        >
          {/* Cultura Catalana */}
          Medistoris.cat
        </Text>
      </View>

      <View style={{ flexDirection: "row", paddingLeft: 20, marginTop: 20 }}>
        <Text style={{ color: "white", fontSize: 24, marginLeft: 0 }}>
          Dites
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "90%",
          marginTop: 10,
          justifyContent: "space-between",
          alignSelf: "center",
        }}
      ></View>

      <FlatList
        data={DitesSongsList}
        scrollEnabled={true}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={<View style={{ height: 1 }}></View>}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                width: "100%",
                height: 110,
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                paddingBottom: 10,
              }}
              activeOpacity={1}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <View style={[styles.imageContainer, styles.shadowProp]}>
                  <Image source={item.artwork} style={styles.image} />
                </View>
                <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                  <Text
                    style={{ color: "white", fontSize: 16, width: "100%" }}
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                
                      <Image
                        source={item.flag === "333" ? flag333 : flag777}
                        style={styles.flag}
                      />
               
                    <Text
                      style={{
                        color: "white",
                        fontSize: 13,
                        verticalAlign: "middle",
                        // marginLeft: 5,
                      }}
                    >
                      {item.artist}
                    </Text>
                  </View>
                </View>
             
                  <Image
                    source={require("../images/playing.webp")}
                    style={{
                      width: 18,
                      height: 18,
                      tintColor: "white",
                      marginLeft: 20,
                    }}
                  />
            
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 100,
    height: 100,
    paddingBottom: 3,
  },
  image: {
    aspectRatio: 1, // Set aspectRatio to 1 to make height the same as width
    flex: 1,
    height: "100%",
    borderRadius: 10,
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    backgroundColor: "rgba(0,0,0,0)",
    elevation: 2,
  },
  flag: {
    width: 20,
    height: 20,
    marginLeft: 5,
    borderRadius: 100,
  },
});

export default LesDites;