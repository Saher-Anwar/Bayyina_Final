import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { AppHeader } from '@/components/Navigation/AppHeader';

export default function Home() {
  return (
    <View className="flex-1 bg-background-0">
      <AppHeader title="Quran Reader" />

      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-3xl font-bold text-primary-600 mb-2 text-center">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </Text>
        <Text className="text-typography-600 mb-8 text-center">
          In the name of Allah, the Most Gracious, the Most Merciful
        </Text>

        <Link className='text-primary-600 mt-4 font-medium' href={'/settings'}>
          Go to Settings →
        </Link>
      </View>
    </View>
  );
}
