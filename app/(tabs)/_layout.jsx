import { Tabs } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        tabBarShowLabel: false,

        headerLeft: () => <AntDesign name="setting" size={24} color="black" />,

        headerRight: () => (
          <AntDesign name="questioncircleo" size={24} color="black" />
        ),
        headerTitleAlign: "center",
        headerLeftContainerStyle: {
          padding: 5,
        },
        headerRightContainerStyle: {
          padding: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="menu" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
