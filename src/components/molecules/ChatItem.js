import { Avatar, List, Text } from "react-native-paper";
import { memo } from "react";
import { View, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

function ChatItem({ item }) {
  console.log("Chat Item Rendered");
  return (
    <List.Item
      onPress={() => console.log("Pressed")}
      title={
        <View style={styles.listTitle}>
          <Text style={styles.name}>{item.name}</Text>

          <List.Icon
            icon={
              item.verified
                ? "md-checkmark-circle-outline"
                : "ellipsis-horizontal-circle-outline"
            }
            color={item.verified ? "#F55A5A" : "#2B283A"}
          />
        </View>
      }
      description={item.status}
      left={(props) => (
        <Avatar.Image
          {...props}
          size={45}
          source={{
            uri: item.imageUri,
          }}
        />
      )}
      right={(props) => (
        <List.Icon {...props} icon='checkmark-done' color='#F55A5A' size={5} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: scale(16),
    paddingRight: 10,
  },
  verifiedStatus: {
    fontSize: scale(12),
  },
});

export default memo(ChatItem);
