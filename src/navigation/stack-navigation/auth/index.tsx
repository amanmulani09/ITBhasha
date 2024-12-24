import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList, AuthStackScreens } from "./types";
import AuthScreen from "../../../screens/auth";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return <Stack.Screen name={AuthStackScreens.Auth} component={AuthScreen} />;
};

export default AuthStack;
