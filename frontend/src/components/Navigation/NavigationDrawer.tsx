import { Text, Pressable } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '@/components/ui/drawer';
import { useTheme } from '../ui/ThemeProvider/ThemeProvider';
import { Button, ButtonText } from '../ui/button';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Settings', path: '/settings' },
  // Add more pages here as you create them
];

export function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  
  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerBackdrop />
      <DrawerContent className="w-4/5 max-w-sm bg-primary-500">
        <SafeAreaView style={{ flex: 1 }}>
          <DrawerHeader className="border-b border-outline-200">
            <Text className="text-2xl font-bold text-secondary-0">
              Navigation
            </Text>
          </DrawerHeader>

          <DrawerBody className="p-0">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Pressable
                  key={item.path}
                  onPress={() => handleNavigation(item.path)}
                  className={`px-6 py-4 border-b border-outline-100 ${
                    isActive ? 'bg-secondary-100' : ''
                  }`}
                >
                  <Text
                    className={`text-lg ${
                      isActive
                        ? 'text-primary-600 font-semibold'
                        : 'text-secondary-700 font-semibold'
                    }`}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              );
            })}
          </DrawerBody>

          <DrawerFooter>
            <Button onPress={toggleTheme}>
              <ButtonText>Dark Mode</ButtonText>
            </Button>
          </DrawerFooter>
        </SafeAreaView>
      </DrawerContent>
    </Drawer>
  );
}
