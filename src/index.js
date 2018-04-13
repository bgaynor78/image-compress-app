import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FileUpload from './components/file-upload-component';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <FileUpload/>
      </div>
    );
  }
}

ReactDOM.render(
    <App />
, document.querySelector('.container'));