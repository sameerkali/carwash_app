import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home as HomeIcon, User, Car } from 'lucide-react-native';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { DehradunWashScreen } from '../screens/DehradunWash/DehradunWashScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import type { MainTabParamList } from '../types';

const Tab = createBottomTabNavigator<MainTabParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0EA5E9',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#F0F9FF',
          paddingBottom: 4,
          paddingTop: 4,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="DehradunWash"
        component={DehradunWashScreen}
        options={{
          tabBarLabel: 'Dehradun Wash',
          tabBarIcon: ({ color, size }) => <Car color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
