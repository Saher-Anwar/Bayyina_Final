import { View, Text, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { AppHeader } from '@/components/Navigation/AppHeader';
import { SurahListItem } from '@/components/Quran/SurahListItem';
import { surahs } from '@/data/surahs';
import BismillahHeader from '@/components/Quran/BismillahHeader';

export default function Home() {
  const router = useRouter();

  const handleSurahPress = (surahNumber: number) => {
    // TODO: Navigate to surah page
    console.log(`Navigate to Surah ${surahNumber}`);
  };

  return (
    <View className="flex-1 bg-background-0">
      <AppHeader title="Surahs" />
      
      {/* Surah List */}
      <FlatList
        data={surahs}
        keyExtractor={(item) => item.number.toString()}
        renderItem={({ item }) => (
          <SurahListItem
            surah={item}
            onPress={() => handleSurahPress(item.number)}
          />
        )}
        contentContainerStyle={{ paddingVertical: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
