import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Tabs } from 'expo-router';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function Layout() {

  return (
    <Tabs>
      <Tabs.Screen name="summary" options={{
        title: 'TabOne'
      }} />
      <Tabs.Screen name="more" options={{
        title: 'More...'
      }} />
    </Tabs>
  );
}
