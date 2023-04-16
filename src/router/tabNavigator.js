import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BlogListScreen from "../screens/bloglist";
import HomeScreen from "../screens/home";
import BlogDetailsScreen from "../screens/blogdetails";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    //   screenOptions={({ route }) => ({
    //     tabBarIcon: ({ focused, color, size }) => {
    //       let iconName;

    //       if (route.name === "Home") {
    //         iconName = focused
    //           ? "ios-information-circle"
    //           : "ios-information-circle-outline";
    //       } else if (route.name === "Settings") {
    //         iconName = focused ? "ios-list" : "ios-list-outline";
    //       }

    // You can return any component that you like here!
    //   return <Ionicons name={iconName} size={size} color={color} />;
    // },
    //     tabBarActiveTintColor: "tomato",
    //     tabBarInactiveTintColor: "gray",
    //   })}
    >
      <Tab.Screen name="Create Blog" component={HomeScreen} />
      <Tab.Screen name="Blogs List" component={BlogListScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
