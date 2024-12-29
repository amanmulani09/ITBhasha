import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList, TabScreens } from "./types";
import HomeScreen from "../../screens/home";
import LearningScreen from "../../screens/learning";
import ProfileScreen from "../../screens/profile";
import AIChatScreen from "../../screens/aichat";
import CustomIcon from "../../components/CustomIcon";
const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={TabScreens.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name={TabScreens.Home} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreens.AIChat}
        component={AIChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name={TabScreens.AIChat} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreens.Learning}
        component={LearningScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name={TabScreens.Learning} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreens.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name={TabScreens.Profile} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
