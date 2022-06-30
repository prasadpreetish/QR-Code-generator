import React from 'react'
import QRCode from "react-qr-code";
import domtoimage from 'dom-to-image';
import { useState } from 'react';

const App = () => {
  let inputFromUser = ""
  const [val, setVal] = useState(inputFromUser);
  const myFunc = (e) => {
    setVal(e.target.value)
  }

  function saving(){
    
    var node = document.getElementById('qrcodeforimg');

    domtoimage.toPng(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });  
  }

  return (
    <>
      <div className="app--container"><input type="text" onChange={myFunc} className="input--field--for--qrcode" />
        <div id="qrcodeforimg">
          <QRCode value={val} className="qrcodemadewithdivs" />
        </div>
        <button onClick={saving}>Capture</button>
      </div>
    </>
  )
}

export default App