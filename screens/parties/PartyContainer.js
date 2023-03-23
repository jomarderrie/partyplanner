import React, {useState, useCallback, useContext, useEffect} from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Dimensions
} from "react-native";
import {Container, Header, Icon, Item, Input, Text, HStack, IconButton} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {UserContext} from "../../context/UsersContext";
import {PartyContext} from "../../context/PartysContext";
import PartyList from "./PartyList";

let { height } = Dimensions.get('window')

const PartyContainer = (props) => {
    const {user} = useContext(UserContext);
    const {partys} = useContext(PartyContext)


    useEffect(() => {
        // console.log(partys)
    }, []);
    return(
        // <Container>
        <>

            <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" alignSelf="stretch" flexDirection={"row"}>
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
            <Container>
                <ScrollView>
                    {/*<View style={styles.listContainer}>*/}
                    {/*    {*/}
                    {/*        parties.map((item) => {*/}
                    {/*            return (*/}
                    {/*                <PartyList*/}
                    {/*                    key={item.id}*/}
                    {/*                    item={item}*/}
                    {/*                    />*/}
                    {/*            )*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*</View>*/}
                </ScrollView>
            </Container>
        </>
    )
}

const Loader = () => {
    return(
        <Container style={[styles.center, { backgroundColor: "#f2f2f2" }]}>
            <ActivityIndicator size="large" color="red" />
        </Container>
    )
}

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

export default PartyContainer;