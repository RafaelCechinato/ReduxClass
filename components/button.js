import { Button } from 'react-native';

export default function ButtonCustom(props){
    return(
        <Button title={props.title} onPress={props.onPress}/>
    )
};