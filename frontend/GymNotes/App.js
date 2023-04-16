import { View, Text, Button, FlatList } from 'react-native';
import { HOST_WITH_PORT } from './environment';
import { styled } from "nativewind";
import "./styles";
import React, {useEffect, useState} from 'react';

const StyledText = styled(Text)
const StyledView = styled(View)

export default function App() {
  // const { colorScheme, toggleColorScheme } = useColorScheme();
  const [data, setData] = useState([]);


  const gethello = async () => {
    const response = await fetch(`${HOST_WITH_PORT}/app/hellodjango`);
    const data = await response.json();
    setData(data);
    console.log(data);
  };
  

  return (
    <StyledView className="flex-1 items-center justify-center dark:bg-neutral-900">
      <StyledText className="text-black dark:text-neutral-200 font-extrabold">Universal React with Expo</StyledText>
      <Text className="text-black dark:text-neutral-200 font-extrabold">poggies</Text>
      {/* <Text>{colorScheme}</Text> */}
      <Text>{data}</Text>
      {/* <FlatList className="h-20" data={data} renderItem={({item}) => <Text>{item.message}</Text>} /> */}
      <Button title="Click me" onPress={gethello} />
    </StyledView>
  );
}

// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }

// import { View, Text, Button, FlatList } from 'react-native';
// import { HOST_WITH_PORT } from './environment';
// import { styled } from "nativewind";
// import "./styles";
// import React, {useEffect, useState} from 'react';


// const App = () => {
//   const StyledText = styled(Text)
//   const StyledView = styled(View)
//   const [data, setData] = useState([]);
  
//   const gethello = async () => {
//     const response = await fetch(`${HOST_WITH_PORT}/app/hellodjango`);
//     const data = await response.json();
//     setData(data.message);
//     console.log(data);
//   };

//   useEffect(() => {
//     gethello();
//   }, []);
  
//   return (
//     <StyledView className="flex-1 items-center justify-center">
//       <StyledText className="text-black font-extrabold">Universal React with Expo</StyledText>
//       <Text className="text-black font-extrabold">poggies</Text>
//       <Button title="Click me" onPress={gethello} />
//       <FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>} />
//     </StyledView>
//   );
// }

// export default App;