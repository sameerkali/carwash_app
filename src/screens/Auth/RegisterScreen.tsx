import { View, Text, TouchableOpacity } from 'react-native';

export function RegisterScreen() {
  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <Text className="text-2xl font-bold text-gray-900 mb-4">Register</Text>
      <Text className="text-gray-500 text-center mb-8">
        Registration coming soon.
      </Text>
      <TouchableOpacity className="bg-blue-500 rounded-lg py-3 px-8">
        <Text className="text-white font-semibold">Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
