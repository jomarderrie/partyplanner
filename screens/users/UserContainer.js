import React, {useContext, useEffect, useState,} from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Dimensions, TouchableOpacity
} from "react-native";
import {
    Container,
    Header,
    Icon,
    Item,
    Input,
    IconButton,
    HStack,
    Box,
    StatusBar,
    Text,
    Center,
    Button, VStack, Spacer
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {UserContext, UsersContext} from "../../context/UsersContext";
import UserList from "./UserList";

let { height } = Dimensions.get('window')

const UserContainer = () => {
    const {user, users,setCurrentUser} = useContext(UserContext);

    const [focus, setFocus] = useState(false);
    const onBlur = () => {
        setFocus(false);
    };
    //todo:: context to get users
    // list of buttons to switch profiles

    // useEffect(() => {
    //     return () => {
    //         setCurrentUser(users[1].id)
    //     };
    // }, []);


    return(
        <>
            <Center>
            <Text>
                Logged in as user: {user}
            </Text>

            </Center>

            <FlatList  data={users} renderItem={({
                                                   item
                                               }) =>


                <Box borderBottomWidth="1" _dark={{
                borderColor: "muted.50"
            }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                <TouchableOpacity onPress={() => setCurrentUser(item.id)}>
                <HStack space={[2, 3]} justifyContent="space-between">



                    <VStack  style={{  padding: 16 }}>
                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" bold>
                            {item.username}
                        </Text>
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            {item.email}
                        </Text>
                    </VStack>
                    <Spacer />
                </HStack>
                    </TouchableOpacity>
            </Box>} keyExtractor={item => item.id} />


        </>
    )
}
// <Container style={[styles.center, { backgroundColor: "#f2f2f2" }]}>
//     <ActivityIndicator size="large" color="red" />
// </Container>
const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    listContainer: {
        height: height,
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default UserContainer;