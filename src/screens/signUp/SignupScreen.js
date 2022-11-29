import { StyleSheet, View } from "react-native";
import React, { useState, useCallback } from "react";
import { Text, Card } from "react-native-paper";
import { scale, moderateVerticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

// Imported icons
import Fontawesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";
import LoginButton from "../../components/atoms/LoginButton";
import Animated, { BounceIn } from "react-native-reanimated";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  console.log("Rerendered");

  const handleSelected = useCallback((selected) => {
    setSelected(selected);
  }, []);

  const handleNavigation = (selected) => {
    if (selected === "first") {
      navigation.navigate("SignUpBenefactor");
    } else if (selected === "second") {
      navigation.navigate("SignUpBenefactor");
    } else if (selected === "third") {
      navigation.navigate("SignUpBenefactor");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Select Your Role</Text>

      <Animated.View entering={BounceIn} style={styles.cardContainer}>
        <Card
          onPress={() => handleSelected("first")}
          value={selected}
          style={[
            styles.card,
            { backgroundColor: selected === "first" ? "#F55A5A" : "#FFFFFF" },
          ]}
        >
          <View
            style={{
              alignItems: "center",
              paddingTop: scale(10),
            }}
          >
            <Fontawesome5
              name='user-graduate'
              color={selected === "first" ? "#FFFFFF" : "#F55A5A"}
              size={scale(30)}
            />
          </View>

          <Card.Content>
            <Text style={styles.cardTitle}>Student</Text>
          </Card.Content>
        </Card>

        <Card
          onPress={() => handleSelected("second")}
          value={selected}
          style={[
            styles.card,
            { backgroundColor: selected === "second" ? "#F55A5A" : "#FFFFFF" },
          ]}
        >
          <View
            style={{
              alignItems: "center",
              paddingTop: scale(10),
            }}
          >
            <Ionicon
              name='person'
              color={selected === "second" ? "#FFFFFF" : "#F55A5A"}
              size={scale(30)}
            />
          </View>

          <Card.Content>
            <Text style={styles.cardTitle}>Benefactor</Text>
          </Card.Content>
        </Card>

        <Card
          onPress={() => handleSelected("third")}
          value={selected}
          style={[
            styles.card,
            { backgroundColor: selected === "third" ? "#F55A5A" : "#FFFFFF" },
          ]}
        >
          <View
            style={{
              alignItems: "center",
              paddingTop: scale(10),
            }}
          >
            <FontAwesome
              name='group'
              color={selected === "third" ? "#FFFFFF" : "#F55A5A"}
              size={scale(30)}
            />
          </View>

          <Card.Content>
            <Text style={styles.cardTitle}>Organization</Text>
          </Card.Content>
        </Card>
      </Animated.View>
      <View
        style={{
          position: "absolute",
          bottom: moderateVerticalScale(150),
          width: "100%",
          alignItems: "center",
        }}
      >
        <LoginButton
          title='Sign Up'
          color='#2B283A'
          onPress={() => handleNavigation(selected)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    position: "absolute",
    top: scale(149),
    fontSize: scale(30),
    fontFamily: "Inter-Medium",
    fontWeight: "bold",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: scale(16),
  },
  card: {
    width: scale(90),
    height: scale(100),
    borderRadius: scale(8),
    backgroundColor: "#FDFCFB",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    paddingTop: scale(14),
    fontSize: scale(10),
    fontFamily: "Inter-Medium",
    fontWeight: "bold",
  },
});
