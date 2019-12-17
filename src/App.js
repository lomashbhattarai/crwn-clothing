import React from 'react';
import { Switch , Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.jsx'
import SignIn from './components/sign-in-sign-out/sign-in.jsx'
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser:user});
      console.log(user);

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SignIn} />
        </Switch>
      </div>
    );

  }
  
}

export default App;
