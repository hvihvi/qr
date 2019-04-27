import React from "react";
import { useState } from "react";
import QrReader from "react-qr-reader";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 100%;
`;

const Element = styled.div`
  padding: 10px;
`;

const QrRead = () => {
  const [qrValue, setQrValue] = useState(0);
  return (
    <Wrapper>
      <Element>
        <QrReader
          delay={300}
          facingMode="environment"
          resolution={600}
          onError={error => console.error(error)}
          onScan={value => setQrValue(value)}
        />
      </Element>
    </Wrapper>
  );
};

export default QrRead;
