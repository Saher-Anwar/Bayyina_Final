import { View, Text, Button } from 'react-native';
import { useTheme } from '@/components/ui/ThemeProvider/ThemeProvider';
import { Link } from 'expo-router';
import { AppHeader } from '@/components/Navigation/AppHeader';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View className="flex-1 bg-primary-950">
      <AppHeader title="Home" />

      <View className="flex-1 justify-center items-center">
        <Text className="text-secondary-0 mb-4">Home Screen</Text>
        <Link className='text-secondary-0 mt-4' href={'/settings'}>Settings</Link>
      </View>
    </View>
  );
}
