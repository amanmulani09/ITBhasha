import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./navigation";
import { Provider } from "react-redux";
import store from "./store";

const Wrapper = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default Wrapper;

const styles = StyleSheet.create({});
