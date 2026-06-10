import { View, Text, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { PostService } from '../../api/endpoints';
import { QUERY_KEYS } from '../../constants';
import type { Post } from '../../types';

export function HomeScreen() {
  const { data: posts, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: () => PostService.getPosts().then(res => res.data),
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
        <Text className="text-red-500 mb-4">Failed to load posts</Text>
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg" onPress={() => refetch()}>
          <Text className="text-white">Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderPost = ({ item }: { item: Post }) => (
    <View className="bg-white border border-gray-200 rounded-xl p-4 mx-4 my-2">
      <Text className="text-lg font-semibold text-gray-900 capitalize mb-1">
        {item.title}
      </Text>
      <Text className="text-gray-600">{item.body}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50">
      <Text className="text-2xl font-bold text-gray-900 px-4 pt-4 pb-2">Posts</Text>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}
