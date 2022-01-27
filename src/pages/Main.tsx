import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

interface Member {
  login: string;
  avatar_url: string;
}

export default function Main() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/members").then((response) => {
      response.json().then((data) => {
        setMembers(data);
      });
    });
  }, []);
  return (
    <FlatList
      data={members}
      contentContainerStyle={{padding: 24}}
      keyExtractor={(members) => members.login}
      renderItem={({ item: members }) => (
        <View style={styles.member}>
          <Image style={styles.image} source={{ uri: members.avatar_url }} />
          <Text>{members.login}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  member: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
});
