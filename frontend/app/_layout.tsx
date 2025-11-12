import React from 'react';
import { Stack } from 'expo-router';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { ThemeProvider, useTheme } from '@/components/ui/ThemeProvider/ThemeProvider';
import { DrawerProvider, useDrawer } from '@/contexts/DrawerContext';
import { NavigationDrawer } from '@/components/Navigation/NavigationDrawer';

import '../global.css';

function RootLayoutContent() {
  const { theme } = useTheme();
  const { isDrawerOpen, closeDrawer } = useDrawer();

  return (
    <GluestackUIProvider mode={theme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <NavigationDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </GluestackUIProvider>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <DrawerProvider>
        <RootLayoutContent />
      </DrawerProvider>
    </ThemeProvider>
  );
}
