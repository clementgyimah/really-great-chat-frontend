import * as React from "react";
import "../assets/css/Dashboard.css";
import styled from "styled-components";
import { Button, Col } from "react-bootstrap";
import { Header, SideBar, ChatBox } from "../components";
import { TestText } from "../common";
import { Colors } from "../common";
import axios from "axios";
import { API_URL } from "../common";

function App() {
  const [userAuthenticated, setUserAuthenticated] = React.useState(false);

  React.useEffect(() => {
    axios.get(`${API_URL}/login`).then(authRes => {
      console.log(authRes)
    })
    .catch(err => {
      alert('There was a problem authenticating you: ' + process.env.NODE_ENV)
    })
  }, []);

  return userAuthenticated ? (
    <MainContainerCol>
      <Header headerHeight={headerHeight} />
      <ChatBox sideBarWidth={sideBarWidth} chatBoxHeight={chatBoxHeight} />
      <SideBar headerHeight={headerHeight} sideBarWidth={sideBarWidth} />
      <BodyCol>{TestText}</BodyCol>
    </MainContainerCol>
  ) : (
    <AuthContainerCol>
      <AuthButton>Authenticate</AuthButton>
    </AuthContainerCol>
  );
}

const headerHeight = 80;
const sideBarWidth = 300;
const bodyEdgeSpace = 30;
const chatBoxHeight = 80;
const authButtonWidth = 150;
const authButtonHeight = 100;

const MainContainerCol = styled(Col)`
  width: 100%;
  height: 100%;
`;

const AuthContainerCol = styled(Col)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const AuthButton = styled(Button)`
  height: ${authButtonHeight}px;
  width: ${authButtonWidth}px;
  margin-left: 15px;
  background-color: ${Colors.colorComb1.ebony};
  border: 0px solid ${Colors.colorComb1.ebony};
`;

const BodyCol = styled(Col)`
  margin: ${headerHeight + bodyEdgeSpace}px ${bodyEdgeSpace}px
    ${chatBoxHeight + bodyEdgeSpace}px ${sideBarWidth + bodyEdgeSpace}px;
`;

export default App;
