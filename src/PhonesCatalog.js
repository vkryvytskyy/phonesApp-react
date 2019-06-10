import React, { Component } from 'react';
import './App.css'; 
import { getAll, getById, BASE_URL } from './services';

class PhonesCatalog extends Component {

  render() {
    let { phones, phoneDetailsHandler } = this.props;

    return (
      <ul className="phones">
        {
          phones.map(phone => 
          <li
              className="thumbnail"
              key={phone.id}
          >
              <a
              onClick={() => phoneDetailsHandler(phone.id)}  
              href="#!/phones/motorola-xoom-with-wi-fi"
              className="thumb"
            >
                <img
                  alt={`${phone.name}™ with Wi-Fi`}
                  src={`${BASE_URL}/${phone.imageUrl}`}
              />
            </a>
            <div className="phones__btn-buy-wrapper">
              <a
                className="btn btn-success"
              >
                Add
              </a>
            </div>
            <a
                href="#!/phones/motorola-xoom-with-wi-fi"
                onClick={() => phoneDetailsHandler(phone.id)} 
            >
              {phone.name}
            </a>
            <p>
              {phone.snippet}
            </p>
          </li>
          )
        }
      </ul>
    );
  }
}

export default PhonesCatalog;