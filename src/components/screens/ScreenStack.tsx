import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TaskScreen from "./TaskScreen";
import ListScreen from "./ListScreen";
import ScreenTask from "./ScreenTask";

const Stack = createStackNavigator();

const ScreenStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen   
                name="Inicio" 
                component={TaskScreen}
            />
            <Stack.Screen   
                name="List" 
                component={ListScreen}
            />
            <Stack.Screen   
                name="TaskS" 
                component={ScreenTask}
            />
        </Stack.Navigator>
    );
};

export default ScreenStack;