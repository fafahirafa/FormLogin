import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component{
    render(){
      return (
        <View style = {StyleSheet.container}>
          <Text>We have no friends! Friends!</Text>
          <Button 
          title ="Add some Friends"
          onPress={() => this.props.navigation.navigate('Login')}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems : 'center',
    justifyContent: 'center',
  }
});