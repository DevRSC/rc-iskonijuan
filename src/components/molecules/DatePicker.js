import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import RNDateTimePicker from "@react-native-community/datetimepicker";

import React, { useState } from "react";

export default function DatePicker(props) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");

  const onChangeHandler = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setDateOfBirth(
      currentDate.getMonth() +
        1 +
        "/" +
        currentDate.getDate() +
        "/" +
        currentDate.getFullYear()
    );

    //get age from date of birth
    var today = new Date();
    var birthDate = new Date(currentDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    //minimum age is 18

    props.getAge(age);
    props.getBirthDate(dateOfBirth);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <>
      <TextInput
        mode='outlined'
        placeholder='mm/dd/yyyy'
        value={dateOfBirth}
        onFocus={showDatepicker}
        showSoftInputOnFocus={false}
        right={<TextInput.Icon icon='calendar' onPress={showDatepicker} />}
      />

      {show && (
        <RNDateTimePicker
          minimumDate={new Date(1990, 0, 1)}
          maximumDate={new Date()}
          value={date}
          mode={mode}
          display='default'
          onChange={onChangeHandler}
          dateFormat='month day year'
        />
      )}
    </>
  );
}
