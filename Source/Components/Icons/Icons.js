import Ionicon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const CustomIonicon = ({ name, size, color }) => {
  return <Ionicon name={name} size={size} color={color} />;
};
export const CustomFontisto = ({ name, size, color }) => {
  return <Fontisto name={name} size={size} color={color} />;
};
export const CustomFontAwesome = ({ name, size, color }) => {
  return <FontAwesome name={name} size={size} color={color} />;
};
