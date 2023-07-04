import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

function TILEditor() {
  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>오늘의 TIL</h2>
      <TitleBox>
        <Title
          name="title"
          type="text"
          value={state.title}
          onChange={handleChangeState}
        />
      </TitleBox>
      <div>
        <Content
          name="content"
          value={state.content}
          onChange={handleChangeState}
        ></Content>
      </div>
      <div>
        <CopyToClipboard
          text={"제목 " + state.author + "\n" + "내용 " + state.content}
          onCopy={() => {
            alert("클립보드에 복사되었습니다");
          }}
        >
          <Button>내용 복사</Button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
const TitleBox = styled.div`
  margin-bottom: 20px;
`;
const Title = styled.input`
  width: 300px;
  height: 30px;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid #000;
`;
const Content = styled.textarea`
  width: 650px;
  height: 650px;
  font-size: 20px;
`;
const Button = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 30px;
`;
export default TILEditor;
