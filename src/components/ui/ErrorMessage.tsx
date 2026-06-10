import { View, Text, TouchableOpacity } from 'react-native';

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorMessage({
  message = 'Something went wrong',
  onRetry,
}: ErrorMessageProps) {
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-red-500 text-lg mb-4 text-center">{message}</Text>
      {onRetry && (
        <TouchableOpacity
          className="bg-blue-500 px-6 py-3 rounded-lg"
          onPress={onRetry}
        >
          <Text className="text-white font-medium">Retry</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
