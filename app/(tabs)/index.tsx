import '@/global.css';
import { Link } from 'expo-router';

import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-bold text-primary font-sans-extrabold">
        Home
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
    </SafeAreaView>
  );
}
