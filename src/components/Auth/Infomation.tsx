import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'

const Infomation = ({jumpTo}: any) => {
  return (
    <View style={{flex: 1}}>
            <ImageBackground source={require("../../../assets/images/bg3.jpeg")}
                resizeMode="cover"
                style={{
                    flex: 1,
                    justifyContent: 'center',
                }}>
                <Text>information</Text>
                <Button
                    onPress={() => { jumpTo("email") }}
                >To email</Button>
            </ImageBackground>

        </View>
  )
}

export default Infomation