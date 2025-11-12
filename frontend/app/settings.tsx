import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Settings() {
  return (
    <View className="flex-1 justify-center items-center bg-red-500">
      <Text className="text-secondary-0 text-2xl mb-4">Settings Screen</Text>
      <Link href="/">
        <Text className="text-secondary-0 underline">Go Back Home</Text>
      </Link>
    </View>
  );
}
