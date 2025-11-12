import React from 'react';
import { Stack } from 'expo-router';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { ThemeProvider, useTheme } from '@/components/ui/ThemeProvider/ThemeProvider';

import '../global.css';

function RootLayoutContent() {
  const { theme } = useTheme();

  return (
    <GluestackUIProvider mode={theme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </GluestackUIProvider>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <RootLayoutContent />
    </ThemeProvider>
  );
}
