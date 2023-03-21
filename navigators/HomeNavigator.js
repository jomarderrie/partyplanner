import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import UserContainer from "../screens/users/UserContainer";


const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={UserContainer}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack />;
}