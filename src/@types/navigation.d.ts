export type RootStackParamList = {
  groups: undefined;
  new: undefined;
  players: { group: string };
};

import { NavigationProp } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

declare global {
  const navigation: NavigationProp<RootStackParamList>;
}