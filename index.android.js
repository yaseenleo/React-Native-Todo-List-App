/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Note from './component/note'

export default class TodoList extends Component {

  state = {
    noteArray: [],
    noteText: '',
  }
  render() {

    let notes = this.state.noteArray.map((val, key)=> {
      return <Note key= {key} keyval={key} val={val} deleteMethod = { () => this.deleteMethod(key)} />
    })
    return (
      <View style={styles.container}>
        
        <View style= {styles.header}>
          <Text style={styles.headerText}>Notes</Text>
        </View>

        <ScrollView style={styles.ScrollContainer}>
          {notes}
        </ScrollView>

        <View style={styles.footer}>
            <TouchableOpacity onPress={this.addText.bind(this)} style={styles.addButton}>
               <Text style={styles.addButtonText}>
                 +
               </Text>
            </TouchableOpacity>

            <TextInput style={styles.textInput} 
              onChangeText = {(noteText) => this.setState({noteText})} value = {this.state.noteText}
              placeholder= 'Type Here' placeholderTextColor= 'white' underlineColorAndroid= 'transparent'>
            </TextInput>
        </View>
      </View>
    );
  }
  addText() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({ 'date': d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear(), 'note': this.state.noteText });
      this.setState({noteArray : this.state.noteArray});
      this.setState({notes: ''});
    }
  }
  deleteMethod(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({'noteArray' : this.state.noteArray})
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    padding: 26
  },
  ScrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#252325',
    borderBottomWidth: 2,
    borderTopColor: '#ededed',
  },
});

AppRegistry.registerComponent('TodoList', () => TodoList);
