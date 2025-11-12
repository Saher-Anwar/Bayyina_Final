import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { AppHeader } from '@/components/Navigation/AppHeader';

export default function Settings() {
  return (
    <View className="flex-1 bg-background-0">
      <AppHeader title="Settings" />

      <View className="flex-1 p-6">
        <View className="bg-background-50 p-6 rounded-xl border border-outline-200">
          <Text className="text-2xl font-bold text-primary-600 mb-4">
            App Settings
          </Text>
          <Text className="text-typography-600 mb-4">
            Configure your Quran reading experience
          </Text>

          <Link href="/">
            <Text className="text-primary-600 font-medium">← Back to Home</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
