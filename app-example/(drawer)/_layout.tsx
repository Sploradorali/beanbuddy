import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function Layout() {

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'overview'
          }}
        />
        <Drawer.Screen
          name="explore"
          options={{
            drawerLabel: 'Explore',
            title: 'explore'
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Settings',
            title: 'settings'
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
