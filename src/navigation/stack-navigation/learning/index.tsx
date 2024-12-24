import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LearningModule from "../../../screens/learning/index";
import { LearningStackParamList, LearningStackScreens } from "./types";
const Stack = createNativeStackNavigator<LearningStackParamList>();

const LearningStack = () => {
  return (
    <Stack.Screen
      name={LearningStackScreens.Learning}
      component={LearningModule}
      options={{
        headerShown: false,
      }}
    />
  );
};

export default LearningStack;
