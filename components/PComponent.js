import { View, Text } from 'react-native'
import React from 'react'

export default function PComponent(props) {
  return (
    <View>
        <Text style={{fontSize: 35, fontWeight: "bold"}} 
            onPress={props.press}>
            {props.myState}
        </Text>
    </View>
  )
}