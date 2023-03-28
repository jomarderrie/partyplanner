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

let { height,width } = Dimensions.get('window')
const PartyContainer = (props) => {
    const {user} = useContext(UserContext);
    const {partys} = useContext(PartyContext)


    useEffect(() => {
        // console.log(partys)
    }, []);
    return(
        <>
            <HStack  bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" alignSelf="stretch" flexDirection={"row"}>
                <HStack alignItems="center">
                    <Text color="white" fontSize="20" fontWeight="bold">
                        Upcoming partiesize
                    </Text>
                </HStack>
                <HStack>
                    <IconButton icon={<Icon as={MaterialIcons} name="add" size={30} color="white" onPress={() =>props.navigation.navigate("Add new party") }/>} />
                    <IconButton icon={<Icon as={MaterialIcons} name="search" size={30} color="white"  />} />
                </HStack>
            </HStack>
            {/*<Container style={{width:'100%'}}>*/}
                <ScrollView>
                    <View style={styles.listContainer}>
                        {
                            partys.map((item) => {
                                return (
                                    <PartyList
                                        navigation={props.navigation}
                                        key={item.id}
                                        item={item}
                                        />
                                )
                            })
                        }
                    </View>
                </ScrollView>
            {/*</Container>*/}
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