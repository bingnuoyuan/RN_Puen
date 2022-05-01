import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import BottomTabs from "./BottomTab";
import Detail from "@/pages/Detail";

/*
type 类型别名
type Name = string;
let name:Name = 'lisi'
*/
type RootStackParamList = {
    BottomTabs: undefined,
    Detail: undefined
}

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator<RootStackParamList>();

class Navigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTitleAlign:'center',
                        
                    }}>
                    <Stack.Screen
                        name="BottomTabs"
                        component={BottomTabs}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen options={{headerTitle: '详情页'}} name="Detail" component={Detail} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigator;