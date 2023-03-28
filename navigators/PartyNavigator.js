import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import UserContainer from "../screens/users/UserContainer";
import SingleParty from "../screens/party/SingleParty";
import PartyContainer from "../screens/parties/PartyContainer";
import AddNewParty from "../screens/parties/AddNewParty";


const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Parties'
                component={PartyContainer}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Party Detail"
                component={SingleParty}
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen name={"Add new party"}
                          component={AddNewParty}
                          options={{
                              headerShown: true
                          }}/>
        </Stack.Navigator>
    )
}

export default function PartyNavigator() {
    return <MyStack />;
}