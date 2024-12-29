import CustomIconMap from "./constant";
import IconComponent from "react-native-vector-icons/FontAwesome6";
const CustomIcon = ({
  name,
  size,
  color,
}: {
  name: keyof typeof CustomIconMap;
  size: number;
  color: string;
}) => {
  const IconName = CustomIconMap[name];
  console.log(IconName);
  return <IconComponent name={IconName} size={size} color={color} />;
};

export default CustomIcon;
