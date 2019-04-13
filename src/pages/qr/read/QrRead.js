import React from "react";
import { useState } from "react";
import QrReader from "react-qr-reader";

const QrRead = () => {
  const [qrValue, setQrValue] = useState(0);
  return (
    <div>
      <QrReader
        delay={300}
        onError={error => console.error(error)}
        onScan={value => setQrValue(value)}
      />
    </div>
  );
};

export default QrRead;
