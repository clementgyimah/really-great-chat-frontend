import * as React from "react";
import "../assets/css/Dashboard.css";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { Header, SideBar, ChatBox, Login } from "../components";
import {
  Colors,
  TestOnlineUsers,
  TestRoom,
  TestCurrentUser,
  API_URL,
} from "../common";
import {
  TUserDataState,
  IChatRoom,
  IChatMessage,
  IUserData,
  ServerToClientEvents,
  ClientToServerEvents,
} from "../customTypes";
import { Signup } from "../components/Signup";
import { io, Socket } from "socket.io-client";
import { sendUserOnline } from "../functions";

function App() {
  const [userAuthenticated, setUserAuthenticated] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState<IUserData>(
    {} as IUserData
  );
  const [onlineUsers, setOnlineUsers] = React.useState<TUserDataState>([]);
  const [room, setRoom] = React.useState<IChatRoom>({} as IChatRoom);
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
    io(API_URL);

  React.useEffect(() => {
    // setUserAuthenticated(true);
    if (userAuthenticated) {
      socket.on("usersonline", (onlinUsers) => {
        console.log("The users: ", onlinUsers);
      });
      sendUserOnline(currentUser);
    }
    setCurrentUser(TestCurrentUser);
    setOnlineUsers(TestOnlineUsers);
    // setRoom(TestRoom);
  }, [currentUser, socket, userAuthenticated]);

  return userAuthenticated ? (
    <MainContainerCol>
      <Header headerHeight={headerHeight} currentUser={currentUser} />
      <ChatBox sideBarWidth={sideBarWidth} chatBoxHeight={chatBoxHeight} />
      <SideBar
        onlineUsers={onlineUsers}
        headerHeight={headerHeight}
        sideBarWidth={sideBarWidth}
      />
      <BodyCol>
        {room.messages && <MessageDateCol>18/06/2022</MessageDateCol>}
        {room.messages ? (
          room.messages.map((eachMessage: IChatMessage) =>
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
          )
        ) : (
          <StyledSelectUser>
            Select a user from the sidebar to start chatting
          </StyledSelectUser>
        )}
      </BodyCol>
    </MainContainerCol>
  ) : (
    <AuthContainerCol>
      <Login
        setCurrentUser={setCurrentUser}
        setUserAuthenticated={setUserAuthenticated}
      />
      <Signup
        setCurrentUser={setCurrentUser}
        setUserAuthenticated={setUserAuthenticated}
      />
    </AuthContainerCol>
  );
}

const headerHeight = 80;
const sideBarWidth = 300;
const bodyEdgeSpace = 30;
const chatBoxHeight = 80;

const MainContainerCol = styled(Col)`
  width: 100%;
  height: 100%;
`;

const AuthContainerCol = styled(Row)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
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

const StyledSelectUser = styled(Col)`
  text-align: center;
  font-size: 20px;
  color: ${Colors.colorComb1.antiqueBrass};
`;

export default App;
