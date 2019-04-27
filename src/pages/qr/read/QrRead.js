import React from "react";
import QrReader from "react-qr-reader";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 100%;
`;

const Element = styled.div`
  padding: 10px;
`;

const QrRead = ({ history }) => {
  return (
    <Wrapper>
      <Element>
        <QrReader
          facingMode="user"
          resolution={600}
          delay={500}
          onError={error => console.error(error)}
          onScan={value => {
            if (value) {
              history.push("/task/" + value);
            }
          }}
        />
      </Element>
    </Wrapper>
  );
};

export default withRouter(QrRead);
