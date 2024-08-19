import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {router, Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import AsyncStorage from "@react-native-async-storage/async-storage";
import create_tables from "@/db/create_tables";
import {NativeBaseProvider} from "native-base";
import {theme} from "@/theme/theme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      AsyncStorage.getItem("first").then((value)=>{
        if(value!=="true"){
          create_tables()
          AsyncStorage.setItem("first","true").then(()=>{
            router.push('/boarding')
          })

        }
      })
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
     <NativeBaseProvider theme={theme}>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        <Stack.Screen name="boarding" options={{ headerShown: false }}/>
      </Stack>
    </ThemeProvider>
     </NativeBaseProvider>
  );
}
