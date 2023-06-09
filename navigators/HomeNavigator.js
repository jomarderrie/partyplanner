import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import UserContainer from "../screens/users/UserContainer";
import SingleParty from "../screens/party/SingleParty";


const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Parties'
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