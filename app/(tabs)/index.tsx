import '@/global.css';
import { Link } from 'expo-router';
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
      <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded-lg bg-primary px-4 py-2 text-white">
        Go to onboarding
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded-lg bg-primary px-4 py-2 text-white">
        Go to Sign Up
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded-lg bg-primary px-4 py-2 text-white">
        Go to Sign In
      </Link>
      <Link href="/subscriptions/spotify" className="mt-4 rounded-lg bg-primary px-4 py-2 text-white">
         Go to Spotify Subscription Details
      </Link>
      <Link href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }} className="mt-4 rounded-lg bg-primary px-4 py-2 text-white">
        Claude Subscription Details
      </Link>
    </View>
  );
}
