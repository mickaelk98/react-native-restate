import { Text, View } from "react-native";
import {Link} from "expo-router"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-primary-300 text-3xl font-rubik">Hello world !</Text>
      <Link href="/sign-in">Sign-in</Link>
      <Link href="/explore">explore</Link>
      <Link href="/profile">profile</Link>
      <Link href="/properties/1">property</Link>
    </View>
  );
}
