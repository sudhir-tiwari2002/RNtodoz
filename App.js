
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import TodoScreen from './src/screen/TodoScreen';


export default function App() {
  return (
  <SafeAreaView style={{marginTop:40}}>
    <View>
      <TodoScreen/>
    </View>
    </SafeAreaView>
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
