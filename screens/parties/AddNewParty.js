import {Container, Input, Text} from "native-base";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import React, {useState} from "react";
import FormContainer from "../shared/FormContainer";




const AddNewParty = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState();
    return(
      <FormContainer title={"Add new party"}>
          <View style={styles.label}>
              <Text style={{ textDecorationLine: "underline"}}>Party name</Text>
          </View>
          <Input
              placeholder="Party Name"
              name="name"
              id="name"
              value={name}
              onChangeText={(text) => setName(text)}
          />
          <View style={styles.label}>
              <Text style={{ textDecorationLine: "underline"}}>Party Description</Text>
          </View>
          <Input
              placeholder="Party Description"
              name="description"
              id="description"
              value={description}
              onChangeText={(text) => setDescription(text)}
          />

      </FormContainer>
    )
}

const styles = StyleSheet.create({
    label: {
        width: "80%",
        marginTop: 10
    },
    buttonContainer: {
        width: "80%",
        marginBottom: 80,
        marginTop: 20,
        alignItems: "center"
    },
    buttonText: {
        color: "white"
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderStyle: "solid",
        borderWidth: 8,
        padding: 0,
        justifyContent: "center",
        borderRadius: 100,
        borderColor: "#E0E0E0",
        elevation: 10
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 100
    },
    imagePicker: {
        position: "absolute",
        right: 5,
        bottom: 5,
        backgroundColor: "grey",
        padding: 8,
        borderRadius: 100,
        elevation: 20
    }
})

export default AddNewParty;