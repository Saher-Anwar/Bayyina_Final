import { Text, Pressable } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from '@/components/ui/drawer';

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

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerBackdrop />
      <DrawerContent className="w-4/5 max-w-sm">
        <DrawerHeader className="border-b border-outline-200">
          <Text className="text-2xl font-bold text-typography-900">
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
                  isActive ? 'bg-primary-100' : ''
                }`}
              >
                <Text
                  className={`text-lg ${
                    isActive
                      ? 'text-primary-600 font-semibold'
                      : 'text-typography-700'
                  }`}
                >
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
