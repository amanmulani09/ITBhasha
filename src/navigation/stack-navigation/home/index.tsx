import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../../screens/home";
import { HomeStackScreens } from "./types";
import { HomeStackParamList } from "./types";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Screen
      name={HomeStackScreens.Home}
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
  );
};

export default HomeStack;
