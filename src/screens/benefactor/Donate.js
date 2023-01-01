import { StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback, useState } from "react";
import { Avatar, Card, Text, Title } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";
import LoginButton from "../../components/atoms/LoginButton";

function CardPrice({ selected, handleSelected, value, price }) {
  return (
    <Card
      onPress={() => handleSelected(value)}
      value={selected}
      style={styles.card}
    >
      <View>
        <Text
          style={{
            fontSize: scale(20),
            fontFamily: "Inter-Medium",
            color: selected === value ? "#F55A5A" : "#2B283A",
          }}
        >
          {price}
        </Text>
      </View>
    </Card>
  );
}

export default function Donate() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  const handleSelected = useCallback((selected) => {
    setSelected(selected);
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Card
          style={{ marginTop: verticalScale(20) }}
          mode='elevated'
          elevation={5}
          borderRadius={9}
        >
          <Card.Content style={styles.headerCard}>
            <Avatar.Image
              source={{
                uri: "https://picsum.photos/700",
              }}
              size={verticalScale(50)}
            />

            <Title
              style={{ paddingLeft: scale(20), fontFamily: "Inter-Medium" }}
            >
              April Kate Pascual
            </Title>
          </Card.Content>
        </Card>
        <View style={styles.containerSubtitle}>
          <Text style={styles.subTitle}>Select Amount</Text>
        </View>
        <View style={styles.cardContainer}>
          <CardPrice
            selected={selected}
            handleSelected={handleSelected}
            value='50'
            price={"₱ 50"}
          />
          <CardPrice
            selected={selected}
            handleSelected={handleSelected}
            value='100'
            price={"₱ 100"}
          />
          <CardPrice
            selected={selected}
            handleSelected={handleSelected}
            value='150'
            price={"₱ 150"}
          />
        </View>
        <View style={styles.cardContainer}>
          <CardPrice
            selected={selected}
            handleSelected={handleSelected}
            value='200'
            price={"₱ 200"}
          />
          <CardPrice
            selected={selected}
            handleSelected={handleSelected}
            value='250'
            price={"₱ 250"}
          />
          <CardPrice
            selected={selected}
            handleSelected={handleSelected}
            value='300'
            price={"₱ 300"}
          />
        </View>
        <View style={styles.separator} />

        <View
          style={{
            width: scale(328),
          }}
        >
          <CustomInput
            name='amount'
            placeholder='Enter Price Manually'
            control={control}
            type='number'
            style={styles.textInput}
            rules={{
              required: "Amount is required",
              pattern: {
                value: /^[0-9]*$/,
                message: "Invalid Amount",
              },
            }}
          />
        </View>
        <View style={styles.containerSubtitle}>
          <Text style={styles.subTitle}>Select Payment</Text>
        </View>

        <Card
          style={styles.paymentCardContainer}
          mode='elevated'
          elevation={5}
          borderRadius={9}
        >
          <Card.Content style={styles.paymentCard}>
            <Text
              style={{
                fontSize: scale(16),
                fontFamily: "Inter-Medium",
              }}
            >
              Gcash
            </Text>

            <Image
              source={require("../../../assets/images/gcash.png")}
              style={{ width: scale(68), height: verticalScale(14) }}
            />
          </Card.Content>
        </Card>
        <LoginButton
          style={styles.button}
          title='Pay and Confirm'
          onPress={handleSubmit(() => {
            navigation.navigate("DonateStack", {
              screen: "DonateConfirmation",
            });
          })}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFB",
  },
  inner: {
    flex: 1,
    alignItems: "center",
  },
  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 9,
    width: scale(328),
    height: verticalScale(72),
    padding: scale(10),
    backgroundColor: "#FFFFFF",
  },
  containerSubtitle: {
    marginTop: verticalScale(16),
    alignItems: "flex-start",
    width: scale(328),
  },
  subTitle: {
    fontFamily: "Inter-Bold",
    fontSize: scale(16),
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    padding: scale(8),
  },
  card: {
    width: scale(90),
    height: verticalScale(70),
    borderRadius: 8,
    backgroundColor: "#FDFCFB",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    fontSize: scale(12),
    fontWeight: "600",

    textAlign: "center",
  },
  paymentCardContainer: {
    marginTop: verticalScale(16),
    backgroundColor: "#FDFCFB",
  },

  paymentCard: {
    width: scale(328),
    height: verticalScale(50),
    flexDirection: "row",
    alignItems: "center",
    padding: scale(14),
    justifyContent: "space-between",
  },
  separator: {
    width: scale(328),
    height: verticalScale(1),
    backgroundColor: "#E5E5E5",
    marginVertical: verticalScale(20),
  },
  button: {
    marginTop: verticalScale(20),
    width: scale(328),
    borderRadius: 8,
  },
});
