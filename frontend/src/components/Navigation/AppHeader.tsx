import { View, Text, Pressable } from 'react-native';
import { useDrawer } from '@/contexts/DrawerContext';
import { Menu } from 'lucide-react-native';

interface AppHeaderProps {
  title: string;
}

export function AppHeader({ title }: AppHeaderProps) {
  const { openDrawer } = useDrawer();

  return (
    <View className="flex-row items-center px-4 py-4 bg-primary-400 border-b-2 border-tertiary-400 shadow-lg">
      <Pressable
        onPress={openDrawer}
        className="p-2 mr-3 rounded-md active:bg-primary-500"
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Menu size={26} color="white" strokeWidth={2.5} />
      </Pressable>

      <Text className="text-xl font-bold text-white flex-1 tracking-wide">
        {title}
      </Text>
    </View>
  );
}
