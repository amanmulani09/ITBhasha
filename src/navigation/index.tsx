import TabNavigation from "./tab";
import AuthStack from "./stack-navigation/auth";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
const AppNavigation = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  );
  console.log(isAuthenticated);
  return isAuthenticated ? <TabNavigation /> : <AuthStack />;
};

export default AppNavigation;
