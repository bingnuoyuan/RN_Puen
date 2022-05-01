import React from "react";
import { View, Text, Button } from "react-native";
import { RootStackNavigation } from "@/navigator/index";

interface IProps {
    navigation: RootStackNavigation
}

class ClockIn extends React.Component<IProps> {
    goPage = () => {
        const {navigation} = this.props;
        navigation.navigate('Detail')
    }
    render(){
        return (
            <View>
              <Text>Homes</Text>
              <Button title="go to detail" onPress={this.goPage} />
            </View>
        )
    }
}
export default ClockIn;