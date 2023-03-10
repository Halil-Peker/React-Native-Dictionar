import { View,Text } from "react-native";
import English from "./src/English";
import Turkish from "./src/Turkish";
import StartedPage from "./src/StartedPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name= "startedPage"
        component={StartedPage}
        options={{ headerShown: false }}
        // options={{title: "StartedPage"}}
        />
        <Stack.Screen
        name= "turkish"
        component={Turkish}
        options={{title: "Turkish"}}
        />
        <Stack.Screen
        name= "english"
        component={English}
        options={{title: "English"}}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
