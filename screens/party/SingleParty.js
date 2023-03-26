import React, {useContext, useEffect, useState,} from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Dimensions, TouchableOpacity, Image, PermissionsAndroid
} from "react-native";
import Contacts from "react-native-contacts";
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
    Button, VStack, Spacer, Heading
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {UserContext, UsersContext} from "../../context/UsersContext";
import StyledButton from "../../styles/StyledButton";

const SingleParty = (props) => {
    const image = null;

    const selectContact = () => {
        // PermissionsAndroid.request(
        //     PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        //     {
        //         'title': 'Contacts',
        //         'message': 'This app would like to view your contacts.',
        //         'buttonPositive': 'Please accept bare mortal'
        //     }
        // )
        console.log(Contacts)
        //     .then
        // Contacts.getAll({}).then(contacts => {
        //     console.log(contacts)
        //     // contacts returned
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
    useEffect(() => {

    }, []);
    return(
        <>
            <Container style={styles.container}>
                <ScrollView style={{ marginBottom: 80, padding: 5 }}>
                    <View>
                        <Image
                            source={{
                                uri: image ? image
                                    : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                            }}
                            resizeMode="contain"
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.contentContainer}>
                        <Heading size='xl' style={styles.contentHeader}>yup</Heading>
                        <Text style={styles.contentText}>yup</Text>
                    </View>
                    <View style={styles.availabilityContainer}>
                        <View style={styles.availability}>
                            <Text style={{ marginRight: 10 }}>
                                Availability: yup
                            </Text>
                            {/*yup*/}
                        </View>
                        <Text>yup</Text>
                    </View>
                    <Button
                        title={"Select contact"}
                        onPress={() => selectContact()}
                        />
                </ScrollView>
            </Container>
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
        height: '100%'
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 250
    },
    contentContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentHeader: {
        fontWeight: 'bold',
        marginBottom: 20
    },
    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
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
        margin: 20,
        color: 'red'
    },
    availabilityContainer: {
        marginBottom: 20,
        alignItems: "center"
    },
    availability: {
        flexDirection: 'row',
        marginBottom: 10,
    }
})

export default SingleParty;