import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { useState } from 'react';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';

import './global.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider/ThemeProvider';

export default function App() {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');

  return (
    <ThemeProvider>
      <GluestackUIProvider mode={colorMode}>
        <Box className="bg-primary-950 flex-1 justify-center items-center">
          <Button
            onPress={() => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }}
          >
            <ButtonText>Toggle color mode</ButtonText>
          </Button>
        </Box>
      </GluestackUIProvider>
    </ThemeProvider>
  );
}
