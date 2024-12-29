import { Alert } from "react-native";
import CustomIconMap from "./constant";
const CustomIcon = ({
  name,
  color,
  size,
}: {
  name: string;
  color: string;
  size: number;
}) => {
  const Icon = CustomIconMap[name as keyof typeof CustomIconMap];
  Alert.alert("13");
  return <Icon color={color} size={size} />;
};
export default CustomIcon;
