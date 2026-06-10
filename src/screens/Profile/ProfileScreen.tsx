import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { UserService } from '../../api/endpoints';
import { QUERY_KEYS } from '../../constants';
import { useAuthStore } from '../../store/authStore';
import type { User } from '../../types';

export function ProfileScreen() {
  const logout = useAuthStore(s => s.logout);

  const { data: users, isLoading, isError, refetch } = useQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: () => UserService.getUsers().then(res => res.data),
  });

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-red-500 mb-4">Failed to load users</Text>
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg" onPress={() => refetch()}>
          <Text className="text-white">Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderUser = ({ item }: { item: User }) => (
    <View className="bg-white border border-gray-200 rounded-xl p-4 mx-4 my-2">
      <Text className="text-lg font-semibold text-gray-900">{item.name}</Text>
      <Text className="text-gray-500">@{item.username}</Text>
      <Text className="text-gray-600 mt-1">{item.email}</Text>
      <Text className="text-gray-400 text-sm mt-1">{item.company.name}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50">
      <View className="flex-row justify-between items-center px-4 pt-4 pb-2">
        <Text className="text-2xl font-bold text-gray-900">Users</Text>
        <TouchableOpacity className="bg-red-500 px-4 py-2 rounded-lg" onPress={logout}>
          <Text className="text-white font-medium">Logout</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}
