import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'

const Password = ({jumpTo}: any) => {
  return (
    <View style={{flex: 1}}>
            <ImageBackground source={require("../../../assets/images/bg2.jpeg")}
                resizeMode="cover"
                style={{
                    flex: 1,
                    justifyContent: 'center',
                }}>
                <Text>password</Text>
                <Button
                    onPress={() => { jumpTo("information") }}
                >To information</Button>
            </ImageBackground>

        </View>
  )
}

export default Password