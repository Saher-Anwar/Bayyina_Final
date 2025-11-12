import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { AppHeader } from '@/components/Navigation/AppHeader';

export default function Settings() {
  return (
    <View className="flex-1 bg-red-500">
      <AppHeader title="Settings" />

      <View className="flex-1 justify-center items-center">
        <Text className="text-secondary-0 text-2xl mb-4">Settings Screen</Text>
        <Link href="/">
          <Text className="text-secondary-0 underline">Go Back Home</Text>
        </Link>
      </View>
    </View>
  );
}
