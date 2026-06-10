import { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import '../global.css';
import { QueryProvider } from './providers/QueryProvider';
import { RootNavigator } from './navigation/RootNavigator';
import { useAuthStore } from './store/authStore';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const hydrate = useAuthStore(s => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <QueryProvider>
          <NavigationContainer>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <RootNavigator />
          </NavigationContainer>
          <Toast />
        </QueryProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
