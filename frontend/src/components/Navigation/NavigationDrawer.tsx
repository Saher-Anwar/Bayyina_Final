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
  const { toggleTheme } = useTheme();
  
  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerBackdrop />
      <DrawerContent className="w-4/5 max-w-sm bg-background-0">
        <SafeAreaView style={{ flex: 1 }}>
          <DrawerHeader className="border-b-2 border-tertiary-400 bg-primary-400 py-6 px-6">
            <Text className="text-2xl font-bold text-white tracking-wide">
              Menu
            </Text>
            <Text className="text-xs text-tertiary-100 mt-1">
              Quran Reader
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
                    isActive ? 'bg-primary-50 border-l-4 border-l-tertiary-400' : ''
                  }`}
                >
                  <Text
                    className={`text-base ${
                      isActive
                        ? 'text-primary-700 font-bold'
                        : 'text-typography-700 font-medium'
                    }`}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              );
            })}
          </DrawerBody>

          <DrawerFooter className="p-4 border-t border-outline-200">
            <Button
              onPress={toggleTheme}
              className="bg-tertiary-400 rounded-lg"
            >
              <ButtonText className="text-white font-semibold">
                Toggle Dark Mode
              </ButtonText>
            </Button>
          </DrawerFooter>
        </SafeAreaView>
      </DrawerContent>
    </Drawer>
  );
}
