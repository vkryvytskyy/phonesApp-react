import React, { Component } from 'react';
import './App.css';
import PhoneViewer from './PhoneViewer';
import PhonesCatalog from './PhonesCatalog';
import { getAll, getById } from './services';


class App extends Component {
  constructor() {
    super();
    this.state = {
      phones: [],
      phoneDetails: null
    };
    this.phoneDetailsHandler = this.phoneDetailsHandler.bind(this);
  }

  componentDidMount() {
    getAll().then(phones =>
      this.setState({
        phones
      })
    );
  }

  phoneDetailsHandler(phoneId) {
    if (phoneId === null) {
      this.setState({
        phoneDetails: null
      });
    } else {
      getById(phoneId).then(phoneDetails =>
        this.setState({
          phoneDetails
        })
      );
    }
  }

  render() {
    let { phones, phoneDetails } = this.state;
    return (
      <div className="App">
        <div>
          <header>
            <h1>Phones App FE_JAN19</h1>
          </header>
          <div className="container-fluid">
            {phoneDetails ? (
              <PhoneViewer
                phoneDetails={phoneDetails}
                phoneDetailsHandler={this.phoneDetailsHandler}
              />
            ) : (
              <PhonesCatalog
                phones={phones}
                phoneDetailsHandler={this.phoneDetailsHandler}
              />
            )}
            <footer>Footer</footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
