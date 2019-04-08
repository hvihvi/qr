import React from "react";
import { useState } from "react";
import QrReader from "react-qr-reader";
import QRCode from "qrcode.react";

const Qr = () => {
  const [qrValue, setQrValue] = useState(0);
  return (
    <div>
      <QrReader
        delay={300}
        onError={error => console.error(error)}
        onScan={value => setQrValue(value)}
        style={{ width: "100%" }}
      />
      {qrValue}
      <QRCode value="task1" />
    </div>
  );
};

export default Qr;
