import React from 'react';
import { Image } from 'react-native';
import { LIBRARY, SETTINGS } from '@constants/routes';
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
    case LIBRARY: {
      return <Image source={focused ? libraryAct : library} resizeMode="contain" />;
    }
    case SETTINGS: {
      return <Image source={focused ? settingsAct : settings} resizeMode="contain" />;
    }
    default:
      return null;
  }
}

export default TabIcon;
