import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Home Screen</Text>
      <Link href="/settings">
        <Button title="Go to Settings" onPress={() => {}} />
      </Link>
    </View>
  );
}
