import * as React from "react";
import { Row, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
import { Colors } from "../common";
import { IChatBoxProps, IFormControlValue } from "../customTypes";
import { handleChatInput, submitChat } from "../functions";

export const ChatBox = (props: IChatBoxProps) => {
  const [inputText, setInputText] = React.useState("");
  const { sideBarWidth, chatBoxHeight } = props;

  return (
    <ChatMainContainerRow
      sidebarwidth={sideBarWidth}
      chatboxheight={chatBoxHeight}
    >
      <ChatInput
        value={inputText}
        placeholder='Type your message here...'
        onChange={(gottenText: IFormControlValue) =>
          handleChatInput({ inputText: gottenText.target.value, setInputText })
        }
      />
      <ChatButton onClick={() => submitChat({ inputText })}>Send</ChatButton>
    </ChatMainContainerRow>
  );
};

const inputWidth = 500;
const inputHeight = 60;
const buttonWidth = 80;
const buttonHeight = 50;

const ChatMainContainerRow = styled(Row)`
  position: fixed;
  display: "flex";
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.chatboxheight}px;
  bottom: 0px;
  left: ${(props) => props.sidebarwidth}px;
  background-color: ${Colors.whiteComb.whiteAlpha1};
  border-top: 1px solid ${Colors.colorComb1.ebony};
`;

const ChatInput = styled(FormControl)`
  background-color: ${Colors.colorComb1.champagnePink};
  height: ${inputHeight}px;
  width: ${inputWidth}px;
  border-radius: 500px;
`;

const ChatButton = styled(Button)`
  height: ${buttonHeight}px;
  width: ${buttonWidth}px;
  margin-left: 15px;
  background-color: ${Colors.colorComb1.ebony};
  border: 0px solid ${Colors.colorComb1.ebony};
`;
