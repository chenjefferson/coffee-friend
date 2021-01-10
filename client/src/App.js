import React, { Fragment, Component } from 'react';
import Header from './components/layout/Header';
import SignUp from './components/pages/SignUp';
import Chat from './components/pages/Chat';
import Users from './components/pages/Users';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
    };
  }

  setNickname = (nn) => {
    console.log('setNickname ran');
    this.setState({ nickname: nn });
  };

  render() {
    return (
      <Fragment>
        <Router>
          <Header nickname={this.state.nickname} />
          <Switch>
            <Route exact path='/'>
              {this.state.nickname.length > 0 ? (
                <Redirect from='/' to='/users' />
              ) : (
                <SignUp setNickname={this.setNickname} />
              )}
            </Route>
            <Route exact path='/users'>
              {this.state.nickname.length === 0 ? (
                <Redirect from='*' to='/' />
              ) : (
                <Users />
              )}
            </Route>
            <Route exact path='/chat'>
              <Chat />
            </Route>
            <Route path='*'>
              <Redirect from='*' to='/' />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
