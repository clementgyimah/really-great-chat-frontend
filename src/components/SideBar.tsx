import styled from "styled-components";
import { Col } from "react-bootstrap";
import { ISideBarProps, IUserData } from "../customTypes";
import { Colors } from "../common";

export const SideBar = (props: ISideBarProps) => {
  const { headerHeight, sideBarWidth, onlineUsers } = props;
  return (
    <SideBarContainerCol
      headerheight={headerHeight}
      sidebarwidth={sideBarWidth}
    >
      <HeadingCol>Users Online</HeadingCol>
      <OnlineUsersCol>
        {onlineUsers.map((eachUser: IUserData) => (
          <EachUserCol key={eachUser.id}>
            {eachUser.name}
          </EachUserCol>
        ))}
      </OnlineUsersCol>
    </SideBarContainerCol>
  );
};

const SideBarContainerCol = styled(Col)`
  position: fixed;
  width: ${(props) => props.sidebarwidth}px;
  height: 100%;
  left: 0px;
  top: ${(props) => props.headerheight}px;
  background-color: ${Colors.whiteComb.whiteAlpha1};
  border-right: 1px solid ${Colors.colorComb1.ebony};
  margin: 10px 20px 10px 20px;
`;

const HeadingCol = styled(Col)`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.colorComb1.ebony};
`;

const OnlineUsersCol = styled(Col)`
    margin-top: 10px;
`;

const EachUserCol = styled(Col)`
  font-size: 15;
  color: ${Colors.blackComb.blackAlpha07};
  margin-top: 10px;
`;
