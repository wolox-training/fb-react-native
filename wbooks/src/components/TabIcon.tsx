import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';
import libraryAct from '@assets/ToolBar/ic_library_active.png';
import settingsAct from '@assets/ToolBar/ic_settings_active.png';
import library from '@assets/ToolBar/ic_library.png';
import settings from '@assets/ToolBar/ic_settings.png';

interface Props {
  focused: boolean;
  route: { name: string };
}

function TabIcon({ focused, route }: Props) {
  switch (route.name) {
    case 'Library':
      if (focused) {
        return <Image source={libraryAct} resizeMode="contain" />;
      }
      return <Image source={library} resizeMode="contain" />;
    case 'Settings':
      if (focused) {
        return <Image source={settingsAct} resizeMode="contain" />;
      }
      return <Image source={settings} resizeMode="contain" />;
    default:
      return null;
  }
}

export default TabIcon;
