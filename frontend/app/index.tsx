import { View, Text, Button } from 'react-native';
import { useTheme } from '@/components/ui/ThemeProvider/ThemeProvider';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View className="flex-1 justify-center items-center bg-primary-950">
      <Text className="bg-error-200 mb-4">Home Screen</Text>
      <Button title={`Toggle Theme (${theme})`} onPress={toggleTheme} />
    </View>
  );
}
