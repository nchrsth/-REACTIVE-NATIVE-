import React from "react";

import { 
    Text,
    View,
    Image  

} from 'react-native';

import { style } from "./styles";
import Logo  from "../../assets/amvju.jpg"

export default function Login (){
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                source={Logo}
                style={{ width: 150, height: 150 }}
                />
            </View>
            <View style={style.boxMid}>
                <Text> MID </Text>
            </View>
            <View style={style.boxBottom}>
                <Text> bottom </Text>
            </View>
        </View>
    )
}