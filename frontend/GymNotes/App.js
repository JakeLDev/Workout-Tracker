import { View, Text, Button } from 'react-native';

import "./styles";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-800 font-extrabold">Universal React with Expo</Text>
      <Text className="text-blue-800 font-extrabold">poggies</Text>
      <Button title="Click me" onPress={gethello} />
    </View>
  );
}

const gethello = async () => {
  const response = await fetch('http://localhost:8000/app/hellodjango');
  const data = await response.json();
  console.log(data);
}