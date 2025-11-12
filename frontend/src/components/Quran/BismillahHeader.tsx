import { View, Text } from 'react-native';

export default function BismillahHeader(){
  return (
    <View className="bg-primary-400 py-6 px-6 border-b-2 border-tertiary-400">
      <Text className="text-2xl font-bold text-white text-center mb-1">
        بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
      </Text>
      <Text className="text-sm text-tertiary-400 text-center">
        In the name of Allah, the Most Gracious, the Most Merciful
      </Text>
    </View>
  )
}