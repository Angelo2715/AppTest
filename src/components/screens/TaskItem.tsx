import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const TaskItem=({item})=>{
    return(
        <View>
            <Text>{item.name}</Text>
        </View> 
    );
}
export default TaskItem;