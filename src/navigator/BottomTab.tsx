import React from "react";
import { Text, Pressable, View, Route } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@/assets/iconfont';
import Home from "@/pages/Home";
import Setting from "@/pages/Setting";
import ClockIn from "@/pages/ClockIn";
import { RootStackNavigation, } from ".";
import { RouteProp } from "@react-navigation/native";

export type BottomTabParamList = {
    Home:undefined,
    ClockIn: undefined,
    Setting: undefined
}

interface IProps {
    navigation: RootStackNavigation,
    route: Route;
}
function getHeaderTitle(route: Route){
    const routeName = route.state ?route.state.routes[route.state.index].name : route.params?.screen || 'Home';
    switch(routeName){
        case "Home":
            return "首页";
        case "ClockIn": 
            return "打卡";
        case "Setting":
            return "我的";
        default:
            return "首页";
    }
}
const Tab = createBottomTabNavigator<BottomTabParamList>();

// type Route = RouteProp<RootStackParamList, 'BottomTabs'>
class BottomTabs extends React.Component<IProps> {
    
    // componentDidMount(){
    //     const { navigation } = this.props;
    //     navigation.setOptions({
    //         title: 'd'
    //     })
    // }
    // componentDidUpdate(){
    //     const { navigation, route } = this.props;
    //     navigation.setOptions({
    //         headerTitle: getHeaderTitle(route),
    //     })
    // }

    render() {
        return (
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarActiveTintColor: '#49057C',
                    })}
                >
                    <Tab.Screen
                        name="ClockIn"
                        component={ClockIn}
                        options={{
                            title: '打卡',
                            tabBarIcon: ({color,size}) => (
                                <Icon name="icon-clockin" color={color} size={size} />
                            )
                            
                        }}
                    />
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: '首页',
                            tabBarIcon: ({color,size}) => (
                                <Icon name="icon-shouye" color={color} size={size} />
                            )
                        }}
                    />
                    <Tab.Screen
                        name="Setting"
                        component={Setting}
                        options={{
                            title: '我的',
                            tabBarIcon: ({color,size}) => (
                                <Icon name="icon-my" color={color} size={size} />
                            )
                        }}
                    />
                </Tab.Navigator>
        )
    }
}

export default BottomTabs;