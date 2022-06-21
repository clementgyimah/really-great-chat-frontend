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
  TSetUserAuthenticated,
  TSetCurrentUser,
  TUserPassword,
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

export interface ILoginButtonProps {
  setCurrentUser: TSetCurrentUser;
  setUserAuthenticated: TSetUserAuthenticated;
}

export interface ILoginFuncProps {
  email: TUserEmail;
  password: TUserPassword;
  setCurrentUser: TSetCurrentUser;
  setUserAuthenticated: TSetUserAuthenticated;
}

export interface ISignupFuncProps {
  name: TUserName;
  email: TUserEmail;
  password: TUserPassword;
  setCurrentUser: TSetCurrentUser;
  setUserAuthenticated: TSetUserAuthenticated;
}

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  usersonline: (onlinUsers: Object) => void;
}

export interface ClientToServerEvents {
  connect: () => void;
  iamonline: () => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}
