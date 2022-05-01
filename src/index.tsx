import Navigator from "./navigator";

// export default Navigator;

import React from 'react';
import { Provider } from 'react-redux';
import store from '@/config/dva'
//Provider 的作用，在这个标签包裹下的任何层级的子组件都能拿到这个标签的传值store
export default class extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        )
    }
}