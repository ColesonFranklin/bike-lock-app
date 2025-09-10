// app/index.tsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Index() {
  const [locked, setLocked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bike Lock App</Text>
      <Text>Status: {locked ? 'Locked' : 'Unlocked'}</Text>
      <Button
        title={locked ? 'Unlock Bike' : 'Lock Bike'}
        onPress={() => setLocked(!locked)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
