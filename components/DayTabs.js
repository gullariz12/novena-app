import Details from './Details';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


export default function DayTabs() {
  const pages = ["پہلا دن", "دوسرادن", "تیسرادن", "چوتھا دن", "پانچواں دن", "چھٹا دن", "ساتواں دن", "آٹھواں دن", "نواں دن"];

  return (
    <Tab.Navigator
      initialRouteName="پہلا دن"
      screenOptions={{
        "tabBarScrollEnabled": true,
        "writingDirection": 'rtl'
      }}
    >
      {pages.reverse().map((page, i) => (
        <Tab.Screen key={i} name={page} component={Details} initialParams={{ page: page }} />
      ))}
    </Tab.Navigator>
  );
}
