/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image,
    Button,
    Alert,
    TextInput
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});
const onPressLearnMore=()=>{
  Alert.alert('Button has been pressed!');
}
export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state={text:'useless placeholder'};
  }
  render() {
    return (
        <TabNavigator>
          <TabNavigator.Item
              title="消息"
              selected={0==this.state.selectIndex}
              renderIcon={() => <Image source={{uri:'msg'}} style={styles.iconStyle}/>}
              onPress={() => this.setState({ selectIndex: 0 })}>
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>

              <Image
                  style={styles.image}
                  resizeMode={'stretch'}
                  source={require('./img/chatou.png')}>
              </Image>
              <Button
                  onPress={onPressLearnMore}
                  title="跳转"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button">
              </Button>
              <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1,margin:10}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  />
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
              title="联系人"
              selected={1==this.state.selectIndex}
              renderIcon={() => <Image source={{uri:'linkman'}} style={styles.iconStyle}/>}
              onPress={() => this.setState({ selectIndex: 1 })}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text>联系人</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
              title="动态"
              selected={2==this.state.selectIndex}
              renderIcon={() => <Image source={{uri:'dongtai'}} style={styles.iconStyle}/>}
              onPress={() => this.setState({ selectIndex: 2 })}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text>动态</Text>
            </View>
          </TabNavigator.Item>
        </TabNavigator>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  image:{
    width:50,
    height:50
  },
  iconStyle:{
      width: 22,
      height: 22
  }
});
