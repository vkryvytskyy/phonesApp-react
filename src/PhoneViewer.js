import React, {Component} from 'react';
import { getById, BASE_URL } from './services';

class PhoneViewer extends Component {

  state = {
    currentImage: 0
  }
  render() {
    let { phoneDetails, phoneDetailsHandler } = this.props;
    let { currentImage } = this.state;
    return (
        <div>
          <img
            className="phone"
            src={`${BASE_URL}/${phoneDetails.images[currentImage]}`}
          />
        <button onClick={() => phoneDetailsHandler(null)}>Back</button>
          <button>Add to basket</button>
          <h1>
          {phoneDetails.name}
          </h1>
          <p>
            Motorola XOOM with Wi-Fi has a super-powerful dual-core
            processor and Android™ 3.0 (Honeycomb) — the Android platform
            designed specifically for tablets. With its 10.1-inch HD
            widescreen display, you’ll enjoy HD video in a thin, light,
            powerful and upgradeable tablet.
          </p>
          <ul className="phone-thumbs">
          {phoneDetails.images.map((src, index) => 
            <li key={src}>
              <img
                src={`${BASE_URL}/${src}`}
                onClick={() => {
                  this.setState({
                    currentImage: index
                  })
                 }
                }
              />
            </li>
            )}
          </ul>
        </div>
    );
  }
}

export default PhoneViewer;