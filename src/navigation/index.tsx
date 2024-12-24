import TabNavigation from "./tab";
import AuthStack from "./stack-navigation/auth";
const AppNavigation = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <TabNavigation /> : <AuthStack />;
};

export default AppNavigation;
