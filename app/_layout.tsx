import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { NativeBaseProvider, theme, Button, Box } from "native-base";
import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Invoice" options={{ headerShown: false }} />
        <Stack.Screen name="PO" options={{ headerShown: false }} />
        <Stack.Screen name="InvoiceDetails" options={{ headerShown: false }} />
        <Stack.Screen name="Camera" options={{ headerShown: false }} />
        <Stack.Screen name="CreateInvoice" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="Payment" options={{ headerShown: false }} />
        <Stack.Screen name="PaymentGateway" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </NativeBaseProvider>
  );
}
