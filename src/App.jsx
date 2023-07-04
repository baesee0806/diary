import React from "react";
import TILEditor from "./TILEditor";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <h2>To Day I Learned</h2>
      <TILEditor />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`;
export default App;
