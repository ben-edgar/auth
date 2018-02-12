import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDuf2sjFyAUTcyoE2GH2D17nMj53kOuGb0',
      authDomain: 'auth-3a31c.firebaseapp.com',
      databaseURL: 'https://auth-3a31c.firebaseio.com',
      projectId: 'auth-3a31c',
      storageBucket: 'auth-3a31c.appspot.com',
      messagingSenderId: '698827688901'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch(this.state.loggedIn) {
      case true:
        return (<Card><CardSection><Button onPress={() => firebase.auth().signOut()}>Log Out</Button></CardSection></Card>);
      case false:
        return (<LoginForm />);
      default:
        return <Card><CardSection><Spinner size="large"/></CardSection></Card>;
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Header headerText="Authentication"></Header>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1
  }
}

export default App;
