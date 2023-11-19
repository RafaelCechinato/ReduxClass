import Button from '../components/button';
import { StyleSheet, View, Text } from 'react-native';
import { counterSlice } from '../store/slice';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 3
    },
  });

export default function Home(){
    const { counterIncrement, counterDecrement, counterIncrementByAmount } = counterSlice.actions;
    const { value } = useSelector((store) => store.counter);
    const dispatch = useDispatch();
    return(
        <View style={styles.container}>
            <Text>{value}</Text>
            <Button title="increase" onPress={() => dispatch(counterIncrement())}></Button>
            <Button title="decrement" onPress={() => dispatch(counterDecrement())}></Button>
            <Button title="byAmount" onPress={() => dispatch(counterIncrementByAmount(5))}></Button>
        </View>
    );
}