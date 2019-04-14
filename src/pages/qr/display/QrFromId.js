import React from "react";
import QRCode from "qrcode.react";

const QrFromId = ({ id, ...rest }) => {
  return (
    <div>
      <QRCode value={id+""} {...rest} size={50} renderAs="svg" />
    </div>
  );
};

export default QrFromId;
