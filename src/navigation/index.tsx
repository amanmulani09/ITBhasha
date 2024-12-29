import TabNavigation from "./tab";
import AuthStack from "./stack-navigation/auth";
import { RootState } from "../store/index";
import { useAppSelector } from "../store/index";
const AppNavigation = () => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );
  return isAuthenticated ? <TabNavigation /> : <AuthStack />;
};

export default AppNavigation;
