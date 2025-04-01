import React from "react";

import { 
    Text,
    View,
    Image
} from 'react-native';

import { style } from "./styles";
import { logo } from "../../assets/logo.jpg"
export default function Login (){
    return (
        <view style={style.container}>
            <view style={style.boxTop}>
                <Image
                 source={logo}  
                 
                 />

            </view>
            <view style={style.boxMid}>
                <text> MID </text>
            </view>
            <view style={style.boxBottom}>
                <text> BOTTOM </text>
            </view>
        </view>
    )
}