import React from "react";
import { View, Text, Button } from "react-native";
import { connect, ConnectedProps, ConnectProps} from "react-redux";
import { RootStackNavigation } from "@/navigator/index";
import { RootState } from "@/models/index";
import Carousel from './Carousel';

const mapStateToProps = ({home,loading}:RootState) => ({
    num: home.num,
    loading:loading.effects['home/asyncAdd']
})
const connenctor = connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connenctor>;

interface IProps extends ModelState {
    navigation: RootStackNavigation
}



class Home extends React.Component<IProps> {
    goPage = () => {
        const {navigation} = this.props;
        navigation.navigate('Detail')
    }
    handleAdd = () => {
        const {dispatch} = this.props;
        dispatch({
            type: 'home/add',
            payload:{
                num: 10
            }
        });
    }
    asyncAdd = () => {
        const {dispatch} = this.props;
        dispatch({
            type: 'home/asyncAdd',
            payload:{
                num: 2
            }
        });
    }
    render(){
        const {num, loading} = this.props;
        return (
            <View>
            <Carousel />
              <Text>Homes{num}</Text>
              <Text>{loading ? 'doing...': ''}</Text>
              <Button title="plus" onPress={this.handleAdd}/>
              <Button title="async plus" onPress={this.asyncAdd}/>
              <Button title="go to detail" onPress={this.goPage} />
            </View>
        )
    }
}
export default connenctor(Home);