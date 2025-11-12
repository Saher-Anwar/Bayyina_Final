import { View, Text, Pressable } from 'react-native';
import { useDrawer } from '@/contexts/DrawerContext';
import { Menu } from 'lucide-react-native';

interface AppHeaderProps {
  title: string;
}

export function AppHeader({ title }: AppHeaderProps) {
  const { openDrawer } = useDrawer();

  return (
    <View className="flex-row items-center px-4 py-3 bg-primary-500 border-b border-outline-200">
      <Pressable
        onPress={openDrawer}
        className="p-2 mr-3"
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Menu size={24} color="white" />
      </Pressable>

      <Text className="text-xl font-semibold text-secondary-0 flex-1">
        {title}
      </Text>
    </View>
  );
}
