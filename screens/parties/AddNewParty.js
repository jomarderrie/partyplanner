import {Button, Container, Pressable, Text} from "native-base";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import React, {useState} from "react";
import FormContainer from "../shared/FormContainer";
import DatePicker from "react-native-date-picker";
import Input from "../shared/Input";
import StyledButton from "../../styles/StyledButton";
import Error from "../shared/Error";




const AddNewParty = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [err, setError] = useState();

    const addParty = () => {
        if (name === "" || date === "" || description === ""){
            setError("Please fill in the form correctly")
        }

    }


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
          <Pressable onPress={() => setOpen(true)}>


          <View style={styles.label} onPress={() => setOpen(true)}>
              <Text style={{ textDecorationLine: "underline"}}>Party Date and time Click here</Text>
          </View>
          </Pressable>
          <Text>Selected Date: {date ? date.toString(): "Date not selected"}</Text>
          <DatePicker
          modal
          open={open}
          date={date}
          minimumDate={new Date()}
          onConfirm={(date) => {
              setOpen(false)
              setDate(date)
          }}
          onCancel={() => {
              setOpen(false)
          }}
      />
          {err ? <Error message={err} /> : null}
          <View style={styles.buttonContainer}>
              <StyledButton
                  large
                  primary
                  onPress={() => addParty()}
              >
                  <Text style={styles.buttonText}>Confirm</Text>
              </StyledButton>
          </View>
          {/*<DatePicker*/}
          {/*    date={date}*/}
          {/*    mode="date"*/}
          {/*    placeholder="select date"*/}
          {/*    format="DD/MM/YYYY"*/}
          {/*    minDate={new Date()}*/}
          {/*    confirmBtnText="Confirm"*/}
          {/*    cancelBtnText="Cancel"*/}
          {/*    customStyles={{*/}
          {/*        dateIcon: {*/}
          {/*            position: 'absolute',*/}
          {/*            right: -5,*/}
          {/*            top: 4,*/}
          {/*            marginLeft: 0,*/}
          {/*        },*/}
          {/*        dateInput: {*/}
          {/*            borderColor : "gray",*/}
          {/*            alignItems: "flex-start",*/}
          {/*            borderWidth: 0,*/}
          {/*            borderBottomWidth: 1,*/}
          {/*        },*/}
          {/*        placeholderText: {*/}
          {/*            fontSize: 17,*/}
          {/*            color: "gray"*/}
          {/*        },*/}
          {/*        dateText: {*/}
          {/*            fontSize: 17,*/}
          {/*        }*/}
          {/*    }}*/}
          {/*    onDateChange={(date) => {*/}
          {/*        setDate(date);*/}
          {/*    }}*/}
          {/*/>*/}

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