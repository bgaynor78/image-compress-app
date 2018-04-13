import React, { Component } from 'react';

import ImageResultList from './image-result-list';

class FileInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      compressedImageInfo:[],
      showProgress: false
    }

    this.onFileUpload = this.onFileUpload.bind(this);
  }

  onFileUpload() {
    const files = this.fileInput.files,
          that = this;
    let fileBinaryArr = [];
    let responseArr = [];

    for (var i = 0; i < files.length; i++) {
      const file = files[i],
            reader = new FileReader();
      let fileBlob = '';
      
      reader.readAsArrayBuffer(file);

      reader.onload = function(e) {
        const fileBinary = e.target.result,
              U8Arr = new Uint8Array(e.target.result),
              xhttp = new XMLHttpRequest();

        fileBlob = new Blob([U8Arr], {type: 'application/octet-stream'});
        fileBinaryArr.push(fileBlob);

        xhttp.open('POST', '/post', true);
        xhttp.addEventListener("progress", updateProgress);
        xhttp.send(fileBlob);
        that.setState({
          showProgress: true
        });
        xhttp.onload = function() {
          console.log("BACK");
          that.setState({
            showProgress: false
          })
          if (this.readyState == 4 && this.status == 200) {
            const responseJson = JSON.parse(this.response);
            responseArr.push(responseJson);

            that.setState({
              compressedImageInfo: responseArr
            });
          }
        }
      }
    }

    function updateProgress (e) {
      console.log(e);
      if(e.lengthComputable) {
        console.log(e.loaded / e.total * 100);
      }else {
        console.log('No progress for you!');
      }
    }
  }
  
  render() {
    const images = this.state.compressedImageInfo;

    return(
      <div className="file-upload-component">
        <h1>IMAGE<span className="blue-text small-text">COMPRESS</span></h1>
        <form>
          <input 
            type="file" 
            id="fileInput"
            className="file-upload-input"
            accept=".jpg, .png, .jpeg" 
            multiple
            ref={input => {this.fileInput = input}} 
            onChange={ this.onFileUpload }
          />
          <label className="button button-primary" htmlFor="fileInput">Upload a image</label>
        </form>
        <ImageResultList images={images}/>
        <div className="progress" style={{display: this.state.showProgress ? 'block' : ''}}></div>
      </div>
    );
  }
}

export default FileInput;