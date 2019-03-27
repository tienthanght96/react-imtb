import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dispatch } from 'redux'
import logo from '../logo.svg';
import './App.css';
import { userLoginWithSession } from '../user/userActions';

class App extends Component<any> {
  componentDidMount() {
    this.props.userLoginWithSession();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <DefaultButton
            text='See Button'
            primary={ true }
            href='#/components/button'
          />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  userLoginWithSession: () => dispatch(userLoginWithSession())
});

export default connect(null, mapDispatchToProps)(App);
