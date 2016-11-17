require('normalize.css/normalize.css');
require('./Main/main.styl');

import React from 'react';

let logo = require('../images/clf.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="logo">
          <img src={logo} alt="Clf" />
          <h1>CLF Studio</h1>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
