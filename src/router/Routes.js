import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TabNavigator from "./tabNavigator";
import BlogDetailsScreen from "../screens/blogdetails";
import HomeScreen from "../screens/home";
import BlogListScreen from "../screens/bloglist";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tab"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Create Blog" component={HomeScreen} />
      <Stack.Screen name="Blogs List" component={BlogListScreen} />
      <Stack.Screen name="Blog Details" component={BlogDetailsScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
