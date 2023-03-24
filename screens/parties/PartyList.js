import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';
import PartyCard from "./PartyCard";


let { width } = Dimensions.get("window");

const PartyList = (props) => {
    const { item } = props;
    return(
        <TouchableOpacity
            style={{ width: '50%' }}
            onPress={() =>
                props.navigation.navigate("Party Detail", { item: item})
            }
        >
            <View style={{ width: width / 2,
                backgroundColor: 'gainsboro'}}
            >
                <PartyCard {...item} />
            </View>
        </TouchableOpacity>
    )
}

export default PartyList;