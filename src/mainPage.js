import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import BaiduMapDemo from '../BaiduMapDemo';

export default class mainPage extends Component {
    // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
    static navigationOptions = {
        header: null,
        tabBarLabel: '首页',
        tabBarIcon:<Image style={{height: 30, width: 30}}
                          source={require('../resources/assets/mainPageBtn.png')}/>
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <BaiduMapDemo/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});