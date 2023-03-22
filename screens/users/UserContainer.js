import React, { useState, } from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Dimensions
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
    Button
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

let { height } = Dimensions.get('window')

const UserContainer = () => {
    const [focus, setFocus] = useState(false);
    const onBlur = () => {
        setFocus(false);
    };
    //todo:: context to get users
    // list of buttons to switch profiles

    return(
        <>
            <Center>


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

                <Button variant="ghost" colorScheme="success"><Text>
                    Success


                    </Text>

                </Button>

            </View>
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