import { StatusBar } from 'expo-status-bar';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

import './global.css';
import { Text } from 'react-native';

export default function App() {
  return (
    
    <GluestackUIProvider mode="dark">
      <>
      <Text>Testing</Text>
      <StatusBar style="auto" />
    </>
    </GluestackUIProvider>
  
  );
}
