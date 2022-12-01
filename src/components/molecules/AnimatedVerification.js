import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import LoginButton from "../atoms/LoginButton";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
const CELL_SIZE = 42;
const CELL_BORDER_RADIUS = 8;
const DEFAULT_CELL_BG_COLOR = "#fff";
const NOT_EMPTY_CELL_BG_COLOR = "#F55A5A";
const ACTIVE_CELL_BG_COLOR = "#fff";

const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 6;

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

export default function AnimatedVerification(props) {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const navigation = useNavigation();

  const [value, setValue] = useState("");
  const [cellProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const submitHandler = () => {
    //pass value to parent component
    props.onVerify(value);

    // if (value?.length !== 6) {
    //   console.warn("Input value is not 6 digits");
    // } else {
    //   setValue(inputValue.toString());
    //   try {
    //     console.warn(value);
    //     await Auth.confirmSignUp({
    //       confirmationCode: value,
    //     });
    //     navigation.navigate("Modal", {
    //       modalMessage: "Your number has been verified",
    //     });
    //   } catch (e) {
    //     Alert.alert("Oops", e.message);
    //   }
    // }
  };

  const renderCell = ({ index, symbol, isFocused }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };
  return (
    <View>
      <CodeField
        ref={ref}
        {...cellProps}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType='number-pad'
        textContentType='oneTimeCode'
        renderCell={renderCell}
      />
      <View style={styles.buttonContainer}>
        <Text style={styles.sendNewCode} onPress={props.onResendPress}>Send new Code</Text>
        <LoginButton
          title='Verify'
          onPress={submitHandler}
          style={{ marginTop: verticalScale(95) }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: verticalScale(40),
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    fontSize: 30,
    textAlign: "center",
    borderRadius: CELL_BORDER_RADIUS,
    color: "#F55A5A",
    backgroundColor: "#FFFFFF",

    // IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================
  buttonContainer: {
    marginTop: verticalScale(72),
  },
  sendNewCode: {
    fontWeight: "700",
    fontSize: scale(14),
    color: "#2B283A",
    textDecorationLine: "underline",
  },
});
