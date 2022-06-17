import {
  THeaderHeight,
  TSideBarWidth,
  TChatBoxHeight,
  TInputText,
  TSetInputText,
} from "./types";

export interface IHeaderProps {
  headerHeight: THeaderHeight;
}

export interface ISideBarProps {
  headerHeight: THeaderHeight;
  sideBarWidth: TSideBarWidth;
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
