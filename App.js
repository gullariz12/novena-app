import WelcomeScreen from './components/WelcomeScreen';
import DayTabs from './components/DayTabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './components/Details';

const Stack  = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="National Marian Shrine Marianabad" component={WelcomeScreen} />
        <Stack.Screen name="مادر مریم آبا دکا نو و بینه" component={DayTabs} />
        <Stack.Screen name="History" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
