import {
  THeaderHeight,
  TSideBarWidth,
  TChatBoxHeight,
  TInputText,
  TSetInputText,
  TUserID,
  TUserEmail,
  TUserName,
  TUserDataState,
  TMessageID,
  TTime,
  TDate,
  TContent,
} from "./types";

export interface IHeaderProps {
  headerHeight: THeaderHeight;
}

export interface ISideBarProps {
  headerHeight: THeaderHeight;
  sideBarWidth: TSideBarWidth;
  onlineUsers: TUserDataState;
}

export interface IChatBoxProps {
  sideBarWidth: TSideBarWidth;
  chatBoxHeight: TChatBoxHeight;
}

export interface IHandleChatInputProps {
  inputText: TInputText;
  setInputText: TSetInputText;
}

export interface IFormControlValue {
  target: {
    value: TInputText;
  };
}

export interface ISubmitChat {
  inputText: TInputText;
}

export interface IUserData {
  id: TUserID;
  email: TUserEmail;
  name: TUserName;
}

export interface IChatMessage {
  id: TMessageID;
  sender: TUserID;
  receiver: TUserID;
  time: TTime;
  date: TDate;
  content: TContent;
}

export interface IChatRoom {
  creator: TUserID;
  member: TUserID;
  messages: IChatMessage[];
}
