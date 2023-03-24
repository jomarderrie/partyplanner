import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeNavigator from "./HomeNavigator";
import PartyContainer from "../screens/parties/PartyContainer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PartyNavigator from "./PartyNavigator";

const Tab = createBottomTabNavigator();


const Main = () => {

    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                activeTintColor: "#e91e63",
            }}
        >

            <Tab.Screen
                name='Home'
                component={HomeNavigator}

                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen name={"Parties_"} component={PartyNavigator}
                        options={{
                            headerShown: false,
                            tabBarLabel: 'Parties',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="party-popper" color={color} size={size} />
                            ),
                        }}
            />

        </Tab.Navigator>
    )
}

export default  Main