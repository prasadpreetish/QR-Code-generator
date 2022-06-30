import React from 'react'
import QRCode from "react-qr-code";
import { useState } from 'react';

const App = () => {
  let inputFromUser = ""
  const [val, setVal] = useState(inputFromUser);
  const myFunc = (e) => {
    setVal(e.target.value)
  }
  return (
    <>
      <div className="app--container"><input type="text" onChange={myFunc} className="input--field--for--qrcode" />
        <QRCode value={val} className="qrcodemadewithdivs" /></div>
    </>
  )
}

export default App