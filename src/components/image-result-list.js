import _ from 'lodash';
import React from 'react';

// function handleDownloadLink(e) {
//   console.log(e.target.href);
//   console.log(e.target.dataset.noClick);

//   if(e.target.dataset.noClick == "true") {
//     return;
//   }
//   e.preventDefault();
//   const link = e.target;
//   const downloadUrl = link.href;

//   function getDataUri(url, callback) {
//     var image = new Image();
//     image.crossOrigin = 'Anonymous';

//     image.onload = function () {
//         var canvas = document.createElement('canvas');
//         canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
//         canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

//         canvas.getContext('2d').drawImage(this, 0, 0);

//         // Get raw image data
//         callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));

//         // ... or get as Data URI
//         callback(canvas.toDataURL('image/png'));
//     };

//     image.src = url;
//   }

//   const xmlRequest = new XMLHttpRequest();
//   xmlRequest.open('GET', `/download?imageUrl=${downloadUrl}`, true);
//   console.log("Sending request to server");
//   xmlRequest.send();

//   xmlRequest.onload = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(this.response);
//       //const responseJSON = JSON.parse(this.response);
//       //console.log(responseJSON);

//       getDataUri(this.response, function(dataUri) {
//         console.log(dataUri);
//       });
//       //console.log(responseJSON);
//       //console.log(responseJSON.statusCode);
//       //console.log(responseJSON.headers['content-type']);
//       //console.log(responseJSON.request.uri.pathname);
//       //const blob = new Blob([this.response], {type: 'image/png'});
      
//       const reader = new FileReader();
//       //
//       // const data = responseJSON.data.data;
//       // function unicodeBase64Encode(text) {
//       //   return window.btoa(encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, function(match, p1) {
//       //       return String.fromCharCode("0x" + p1)
//       //   }))
//       // }
//       // console.log(unicodeBase64Encode(data));
//       // console.log(data.length);

//       // let byteNums = new Array(data.length);
//       // for(let i = 0; i < data.length; i++) {
//       //   byteNums[i] = data.charCodeAt(i);
//       // }
//       // const byteArr = new Uint8Array(byteNums);
//       // console.log(byteArr);
//       // const blob = new Blob([data], {type: 'text/plain'});

//       // const clearData = result.replace(/^data:image\/\w+;base64,/, '');
//       // const downloadImage = (name, content, type) => {
//       //   console.log(content);
//       //   link.href = `data:image/png;base64,${content}`;
//       //   link.download = /\.\w+/.test(name) ? name : `${name}.png`;
//       //   link.dataset.noClick = true;
//       // }
//       // downloadImage('mydownload', clearData, responseJSON.type);
      

//       // function encode(data) {
//       //   var str = String.fromCharCode.apply(data,data);
//       //   return btoa(str).replace(/.{76}(?=.)/g,'$&\n');
//       // }
//       // console.log(encode(data));
//       // console.log(decodeURIComponent(encode(data)));
//       // const base64Str = `data:${responseJSON.type};base64,aHR0cHM6Ly9hcGkudGluaWZ5LmNvbS9vdXRwdXQvMXJtd2QwZThucGdtZWJrazJlOGoxMGI5Zmt2NHZqYWc=`;

//       // console.log(base64Str);
//       // const data = responseJSON.data.split(',')[1];
//       // const prefix = responseJSON.data.split(',')[0];
//       // const binary = atob(data);
//       // let byteNums = new Array(data.length);
//       // for(let i = 0; i < binary.length; i++) {
//       //   byteNums[i] = binary.charCodeAt(i);
//       // }
//       // const byteArr = new Uint8Array(byteNums);
//       // console.log(byteArr);
//       // const blob = new Blob([data], {type: 'image/png'});
//       //console.log(blob);
//       // // //const url = URL.createObjectURL(blob)
//       //reader.readAsDataURL(blob);
//       // //console.log(url);
//       //console.log(blob);
//       //FileSaver.saveAs(blob, 'mydownload');
//       // const url = window.URL.createObjectURL(blob);
//       // //console.log(url);
//       // //window.location.assign(responseJSON);
      
//       // //reader.readAsDataURL(responseJSON);
//       // console.log(`${prefix},${encodeURIComponent(data)}`);
//       // link.href = base64Str;
//       // link.download = "mydownload.png";
//       // link.dataset.noClick = true;
//       //link.click();
//       //const url = URL.createObjectURL(blob);
//       //console.log(url);
//       //const win = window.open();
//       //win.document.write(`<iframe src="${url}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
//       //link.click();

//       reader.onload = function(e) {
//         console.log(e.target.result);
//         Convert.FromBase64String(e.target.result);
//         const result = e.target.result;
//         const clearData = result.replace(/^data:image\/\w+;base64,/, '');
//         const downloadImage = (name, content, type) => {
//           console.log(content);
//           link.href = `data:application/octet-stream;base64,${content}`;
//           link.download = /\.\w+/.test(name) ? name : `${name}.png`;
//           link.dataset.noClick = true;
//         }
//         downloadImage('mydownload', clearData, responseJSON.type);
//         // const resultArrayBuff = e.target.result;
//         // console.log(resultArrayBuff.byteLength);
//         // // // //console.log(e.target.result.split(',')[1]);
//         // // //       resultMime = resultArr[0].match(/:(.*?);/)[1],
//         // // //       resultBase64 = resultArr[1],
//         // // //       resultBinary = atob(resultBase64),
//         // let byteNums = new Array(resultArrayBuff.length);
//         // for(let i = 0; i < resultArrayBuff.length; i++) {
//         //   byteNums[i] = resultArrayBuff.charCodeAt(i);
//         // }
//         // const byteArr = new Uint8Array(byteNums);
//         // console.log(byteArr);
//         // // console.log(resultMime);
//         // // console.log(binaryLength);
//         // console.log(U8Arr);

//         // while(binaryLength--) {
//         //   U8Arr[binaryLength] = resultBinary.charCodeAt(binaryLength);
//         // }
//         //const file = new File([U8Arr], 'mydownload.png', {type: resultMime})
//         //console.log(resultBinary);
//         //console.log(escape(resultBase64));
//         //const goodBase64 = btoa(decodeURIComponent(resultBase64))
//         //console.log(file);
//         //console.log(atob(e.target.result));
//         //const url = e.target.result;
//         //document.location = e.target.result;
//         // link.href = e.target.result;
//         // link.download = "mydownload.png";
//         // link.dataset.noClick = true;
//         //link.click();
//       }
//     }
//   }
// }

const ImageResultList = (props) => {

  if(props.images.length === 0) {
    return (
      <div className="image-results">
        <div className="no-images">Upload image(s) to compress.</div>
      </div>
    );
  }

  function formatBytes(bytes, decimals) {
    if(bytes == 0) return '0 Bytes';

    const kb = 1024,
          dm = decimals || 2,
          sizes = ['Bytes', 'KB', 'MB', 'GB'],
          i = Math.floor(Math.log(bytes) / Math.log(kb));
    return parseFloat((bytes / Math.pow(kb, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function calculatePercentReduction(origSize, newSize) {
    if(origSize == 0 || newSize == 0) return '0% Reduction';
    return `${100 - (newSize / origSize * 100).toFixed(1)}%`;
  }

  const imageItems = props.images.map((image, index) => {
    const origSize  = image.input.size,
        newSize     = image.output.size,
        imageUrl    = image.output.url,
        imageWidth  = image.output.width,
        imageHeight = image.output.height;

    return(
      <li className="image-results-list-item">
        <div className="row">
          <div className="col-4">
            <img className="compressed-image-preview" src={imageUrl}/>
          </div>
          <div className="col-8 compressed-image-info">
            <div className="compressed-image-stats">
              <div className="percent-reduction">{calculatePercentReduction(origSize, newSize)}</div>
              <div className="orig-size">{formatBytes(origSize)}</div> 
              <div className="new-size">{formatBytes(newSize)}</div>
            </div>
            <div className="image-specs">{imageWidth}w x {imageHeight}h | <a href={imageUrl} target="_blank">Download</a></div>
          </div>
        </div>
      </li>
    );
  });
  return(
    <div className="image-results">
      <p className="title">RESULTS</p>
      <ul className="image-results-list">
          {imageItems}
      </ul>
    </div>
  )
}

export default ImageResultList;