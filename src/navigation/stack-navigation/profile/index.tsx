import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../../screens/profile";
import { ProfileStackParamList, ProfileStackScreens } from "./types";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Screen
      name={ProfileStackScreens.Profile}
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
  );
};

export default ProfileStack;
