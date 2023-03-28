import React, {useContext, useEffect, useState,} from "react";
import {FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {Box, Button, Container, Heading, HStack, Spacer, Text, VStack} from "native-base";
import {selectContact} from 'react-native-select-contact';
import StyledButton from "../../styles/StyledButton";
import {PartyContext} from "../../context/PartysContext";
import {UserContext} from "../../context/UsersContext";

const SingleParty = (props) => {
    const image = null;
    const {partys, setParties} = useContext(PartyContext)
    const {user, users,setCurrentUser} = useContext(UserContext);
    const [party,setParty ] = useState(props.route.params.item)
    const selectContact2 = () => {
        // PermissionsAndroid.request(
        //     PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        //     {
        //         'title': 'Contacts',
        //         'message': 'This app would like to view your contacts.',
        //         'buttonPositive': 'Please accept bare mortal'
        //     }
        // )
        // console.warn(Contacts)
        //     .then
        // Contacts.getAll().then(contacts => {
            // console.warn(contacts)
            // contacts returned
        // })
        //     (Contacts.openContactForm()
        //         .then((contacts) => {
        //             // work with contacts
        //             console.log(contacts)
        //         })
        //         .catch((e) => {
        //             console.log(e)
        //         }))
    }

    const addContact = () => {
        return selectContact()
            .then(selection => {
                if (!selection) {
                    return null;
                }
                console.log(selection)
                let {name, recordId} = selection
                // console.log(party, " parties")

                // console.log(partys, " p123 ");
                let partyindex = partys.findIndex(partyItem => party.title === partyItem.title)
                let selectedContact = {
                    "name": name,
                    "recordID": recordId
                }
               //  setParty((parties) => {
               // return      parties[partyindex].contacts  = [
               //         selectedContact ,...parties[partyindex].contacts ]
               //  })

                setParties((parties) => {
                    // const updatedParties = [...parties]; // create a copy of the original array
                    return parties.map(party2 => {
                        if (party.title === party2.title) {
                            return {
                                ...party2,
                                contacts: [selectedContact, ...party2.contacts],
                            };
                        }
                        return party2;
                    });// return the updated array of parties
                });


                // console.log(selection)
                // let { contact, selectedPhone } = selection;
                // console.log(`Selected ${selectedPhone.type} phone number ${selectedPhone.number} from ${contact.name}`);
                // return selectedPhone.number;
            });
    }
    useEffect(() => {
        console.log(users, "Users123")
        let partyindex = partys.findIndex(partyItem => party.title === partyItem.title)
        setParty(partys[partyindex])
        console.log(JSON.stringify(partys[partyindex]) + " oek")
        //current item
        // setParty(props.route.params.item)
        // console.log(props.route.params)
        // console.log(props.route.params.item)
    }, [partys, []]);
    return(
        <>
            <Container style={styles.container}>
                <ScrollView style={{ paddingBottom:200,  width: '100%' }}>
                    <View>
                        <Image
                            source={{
                                uri: image ? image
                                    : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                            }}
                            resizeMode="contain"
                            style={styles.image }
                        />
                    </View>
                    <View style={styles.contentContainer}>
                        <Heading size='xl' style={styles.contentHeader}>{party.title}</Heading>
                    </View>

                    <Button
                        title={"Select contact"}
                        onPress={() => addContact()}
                        />
                </ScrollView>
                <FlatList style={{width:"100%"}} data={users} renderItem={({
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

            </Container>

            {/*<Container style={styles.container}>*/}
            {/*<FlatList  data={users} renderItem={({*/}
            {/*                                         item*/}
            {/*                                     }) =>*/}


            {/*    <Box borderBottomWidth="1" _dark={{*/}
            {/*        borderColor: "muted.50"*/}
            {/*    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">*/}
            {/*        <TouchableOpacity onPress={() => setCurrentUser(item.id)}>*/}
            {/*            <HStack space={[2, 3]} justifyContent="space-between">*/}



            {/*                <VStack  style={{  padding: 16 }}>*/}
            {/*                    <Text _dark={{*/}
            {/*                        color: "warmGray.50"*/}
            {/*                    }} color="coolGray.800" bold>*/}
            {/*                        {item.username}*/}
            {/*                    </Text>*/}
            {/*                    <Text color="coolGray.600" _dark={{*/}
            {/*                        color: "warmGray.200"*/}
            {/*                    }}>*/}
            {/*                        {item.email}*/}
            {/*                    </Text>*/}
            {/*                </VStack>*/}
            {/*                <Spacer />*/}
            {/*            </HStack>*/}
            {/*        </TouchableOpacity>*/}
            {/*    </Box>} keyExtractor={item => item.id} />*/}
            {/*</Container>*/}





            <VStack style={styles.bottomContainer} w={"100%"} justifyContent="space-between">
                    <HStack >
                         <Text style={styles.price}>asd</Text>
                    </HStack>
                    <HStack justifyContent="space-between">
                        <StyledButton
                            primary
                            medium
                            // onPress={() => {props.addItemToCart(item.id),
                            //     Toast.show({
                            //         topOffset: 60,
                            //         type: "success",
                            //         text1: `add added to Cart`,
                            //         text2: "Go to your cart to complete order"
                            //     })
                            // }}
                        >
                            <Text>yup</Text>
                        </StyledButton>
                        <Text style={{ color: 'white'}}>Add</Text>
                    </HStack>
                </VStack>


                {/*<View style={styles.bottomContainer}>*/}
                {/*    <Left>*/}
                {/*        <Text style={styles.price}>asd</Text>*/}
                {/*    </Left>*/}
                {/*    <Right>*/}
                {/*        <StyledButton*/}
                {/*            primary*/}
                {/*            medium*/}
                {/*            // onPress={() => {props.addItemToCart(item.id),*/}
                {/*            //     Toast.show({*/}
                {/*            //         topOffset: 60,*/}
                {/*            //         type: "success",*/}
                {/*            //         text1: `add added to Cart`,*/}
                {/*            //         text2: "Go to your cart to complete order"*/}
                {/*            //     })*/}
                {/*            // }}*/}
                {/*        >*/}
                {/*        </StyledButton>*/}
                {/*    <Text style={{ color: 'white'}}>Add</Text>*/}
                {/*    </Right>*/}
                {/*</View>*/}

        {/*<Container style={[styles.center, { backgroundColor: "#f2f2f2" }]}>*/}
        {/*    <ActivityIndicator size="large" color="red" />*/}
        {/*</Container>*/}
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        alignSelf: "stretch",
        padding: 16
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 200
    },
    contentContainer: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentHeader: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white'
    },
    price: {
        fontSize: 24,
        margin: 5,
        color: 'red'
    },
    availabilityContainer: {
        marginBottom: 5,
        alignItems: "center"
    },
    availability: {
        flexDirection: 'row',
        marginBottom:5,
    }
})

export default SingleParty;