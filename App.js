import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>my first App</Text>
    <TouchableOpacity style={styles.submitButton}> <Text>submit</Text> </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
