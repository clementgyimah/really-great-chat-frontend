import * as React from "react";
import "../assets/css/Dashboard.css";
import styled from "styled-components";
import { Button, Col } from "react-bootstrap";
import { Header, SideBar, ChatBox } from "../components";
import {
  TestText,
  Colors,
  TestOnlineUsers,
  TestRoom,
  TestCurrentUser,
} from "../common";
import {
  TUserDataState,
  IChatRoom,
  IChatMessage,
  IUserData,
} from "../customTypes";
// import axios from "axios";
// import { API_URL } from "../common";

function App() {
  const [userAuthenticated, setUserAuthenticated] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState<IUserData>(
    {} as IUserData
  );
  const [onlineUsers, setOnlineUsers] = React.useState<TUserDataState>([]);
  const [room, setRoom] = React.useState<IChatRoom>({} as IChatRoom);

  React.useEffect(() => {
    setUserAuthenticated(true);
    setCurrentUser(TestCurrentUser);
    setOnlineUsers(TestOnlineUsers);
    setRoom(TestRoom);
    /*
    axios.get(`${API_URL}/api/users/all`).then(authRes => {
      console.log(authRes)
    })
    .catch(err => {
      alert('There was a problem authenticating you: ' + process.env.NODE_ENV)
    })
    */
  }, []);

  return userAuthenticated ? (
    <MainContainerCol>
      <Header headerHeight={headerHeight} />
      <ChatBox sideBarWidth={sideBarWidth} chatBoxHeight={chatBoxHeight} />
      <SideBar
        onlineUsers={onlineUsers}
        headerHeight={headerHeight}
        sideBarWidth={sideBarWidth}
      />
      <BodyCol>
        <MessageDateCol>18/06/2022</MessageDateCol>
        {room.messages.map((eachMessage: IChatMessage) =>
          currentUser.id === eachMessage.sender ? (
            <SenderMessageCol key={eachMessage.id}>
              <SenderMessageSpan>
                {eachMessage.content}{" "}
                <MessageTimeSpan>{eachMessage.time}</MessageTimeSpan>
              </SenderMessageSpan>
            </SenderMessageCol>
          ) : (
            <ReceiverMessageCol key={eachMessage.id}>
              <ReceiverMessageSpan>
                {eachMessage.content}{" "}
                <MessageTimeSpan>{eachMessage.time}</MessageTimeSpan>
              </ReceiverMessageSpan>
            </ReceiverMessageCol>
          )
        )}
      </BodyCol>
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

const MessageDateCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const SenderMessageCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SenderMessageSpan = styled.span`
  display: inline-block;
  background-color: ${Colors.colorComb1.desertSand};
  margin-top: 10px;
  padding: 10px;
  border-radius: 300px;
`;

const ReceiverMessageCol = styled(Col)`
  display: "flex";
`;

const ReceiverMessageSpan = styled.span`
  display: inline-block;
  background-color: ${Colors.colorComb1.ashGray};
  margin-top: 10px;
  padding: 10px;
  border-radius: 300px;
`;

const MessageTimeSpan = styled.span`
  font-size: 12px;
  margin-left: 5px;
`;

export default App;
