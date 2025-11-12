import { View, Text, Button } from 'react-native';
import { useTheme } from '@/components/ui/ThemeProvider/ThemeProvider';
import { Link } from 'expo-router';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View className="flex-1 justify-center items-center bg-primary-950">
      <Text className="text-secondary-0 mb-4">Home Screen</Text>
      <Button title={`Toggle Theme (${theme})`} onPress={toggleTheme} />
      <Link className='text-secondary-0' href={'/settings'}>Settings</Link>
    </View>
  );
}
