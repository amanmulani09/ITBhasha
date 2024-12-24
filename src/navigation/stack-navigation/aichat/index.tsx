import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AIChatScreen from "../../../screens/aichat";
import { AIChatStackParamList, AIChatStackScreens } from "./types";

const Stack = createNativeStackNavigator<AIChatStackParamList>();

const AichatStack = () => {
  return (
    <Stack.Screen
      name={AIChatStackScreens.AIChat}
      component={AIChatScreen}
      options={{
        headerShown: false,
      }}
    />
  );
};

export default AichatStack;
