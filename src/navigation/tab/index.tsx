import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList, TabScreens } from "./types";
import HomeScreen from "../../screens/home";
import LearningScreen from "../../screens/learning";
import ProfileScreen from "../../screens/profile";
import AIChatScreen from "../../screens/aichat";

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TabScreens.Home} component={HomeScreen} />
      <Tab.Screen name={TabScreens.Learning} component={LearningScreen} />
      <Tab.Screen name={TabScreens.Profile} component={ProfileScreen} />
      <Tab.Screen name={TabScreens.AIChat} component={AIChatScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
