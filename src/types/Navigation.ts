import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type PublicStackParamsList = {
  Login: undefined;
};

export type LoginNavigation = NativeStackNavigationProp<
  PublicStackParamsList,
  'Login'
>;
