import { View, Text, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from '@rneui/themed'

const Email = ({ jumpTo }: any) => {
    const [email, setEmail] = useState("")
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={require("../../../assets/images/bg1.jpeg")}
                        resizeMode="cover"
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}>
                        <View style={{ padding: 10 }}>
                            <Input
                                placeholder="Email / Số điện thoại"
                                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                                onChangeText={value => setEmail(value)}
                                style={{
                                    fontSize: 24
                                }}
                            />
                            <View style={{ paddingHorizontal: 10 }}>
                                <Button
                                    onPress={() => { jumpTo("password") }}
                                >Tiếp theo</Button>
                            </View>

                        </View>

                    </ImageBackground>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}

export default Email