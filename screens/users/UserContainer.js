import React, {useContext, useState,} from "react";
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

    return(
        <>
            <Center>
            <Text>
                Logged in as user: {user}
            </Text>

            <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
                <HStack alignItems="center">
                    <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
                    <Text color="white" fontSize="20" fontWeight="bold">
                        Home
                    </Text>
                </HStack>
                <HStack>
                    <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
                    <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
                    <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
                </HStack>
            </HStack>
            </Center>
            <View>

                <Button variant="ghost" colorScheme="success" onPress={() => setCurrentUser()}>
                    <Text>
                    Success
                    </Text>
                </Button>


            </View>
            <FlatList data={users} renderItem={({
                                                   item
                                               }) =>


                <Box borderBottomWidth="1" _dark={{
                borderColor: "muted.50"
            }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                <TouchableOpacity onPress={() => setCurrentUser()}>
                <HStack space={[2, 3]} justifyContent="space-between">



                    <VStack onPress={() => setCurrentUser()}>
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