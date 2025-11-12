import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { ThemeProvider, useTheme } from '@/components/ui/ThemeProvider/ThemeProvider';
import { DrawerProvider, useDrawer } from '@/contexts/DrawerContext';
import { NavigationDrawer } from '@/components/Navigation/NavigationDrawer';

import '../global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function RootLayoutContent() {
  const { theme } = useTheme();
  const { isDrawerOpen, closeDrawer } = useDrawer();

  return (
    <GluestackUIProvider mode={theme}>
      <StatusBar style="auto" animated />
      <SafeAreaView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </SafeAreaView>
      <NavigationDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </GluestackUIProvider>
  );
}

export default function Layout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <DrawerProvider>
          <RootLayoutContent />
        </DrawerProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
