import React from "react";
import { useState } from "react";
import QrReader from "react-qr-reader";
import styled from "styled-components";
import logo from "../../home/qr-code.svg";

const Wrapper = styled.div`
  flex: 1;
  width: 90%;
  max-width: 100%;
`;

const Element = styled.div`
  padding: 10px;
`;

const Img = styled.img`
  align-self: center;
  width: 20vh;
`;

const QrRead = () => {
  const [qrValue, setQrValue] = useState(0);
  return (
    <Wrapper>
      <Element>
        <input type="file" accept="image/*" capture="camera" />
        <QrReader
          delay={300}
          facingMode="environment"
          resolution={600}
          onError={error => console.error(error)}
          onScan={value => setQrValue(value)}
        />
      </Element>
      <Element>
        <Img src={logo} />
      </Element>
    </Wrapper>
  );
};

export default QrRead;
