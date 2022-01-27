import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Camera from "./pages/Camera";
import Main from "./pages/Main";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Main"
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={20} color={color} />
            ),
          }}
          component={Main}
        />
        <Tab.Screen
          name="Camera"
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="camera" size={20} color={color} />
            ),
          }}
          component={Camera}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
