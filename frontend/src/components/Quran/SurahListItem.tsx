import { Pressable, View, Text } from 'react-native';
import { Surah } from '@/types/quran';

interface SurahListItemProps {
  surah: Surah;
  onPress: () => void;
}

export function SurahListItem({ surah, onPress }: SurahListItemProps) {
  return (
    <Pressable
      onPress={onPress}
      className="mx-4 my-2 bg-background-50 rounded-xl border border-outline-200 overflow-hidden active:bg-background-100"
    >
      <View className="flex-row items-center p-4">
        {/* Surah Number Badge */}
        <View className="w-12 h-12 rounded-full bg-tertiary-400 items-center justify-center mr-4">
          <Text className="text-white font-bold text-base">
            {surah.number}
          </Text>
        </View>

        {/* Surah Info */}
        <View className="flex-1">
          <Text className="text-base font-semibold text-typography-900 mb-1">
            {surah.transliteration}
          </Text>
          <Text className="text-sm text-typography-600">
            {surah.translation} • {surah.verses} verses
          </Text>
        </View>

        {/* Arabic Name */}
        <View className="ml-2">
          <Text className="text-2xl text-primary-600 font-bold" style={{ writingDirection: 'rtl' }}>
            {surah.name}
          </Text>
          <Text className="text-xs text-typography-500 text-right mt-1">
            {surah.revelation}
          </Text>
        </View>
      </View>

      {/* Bottom accent line */}
      <View className="h-1 bg-gradient-to-r from-primary-400 to-tertiary-400" />
    </Pressable>
  );
}
