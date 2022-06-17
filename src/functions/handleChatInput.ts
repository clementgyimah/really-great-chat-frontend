import { IHandleChatInputProps } from "../customTypes";

export const handleChatInput = (props: IHandleChatInputProps) => {
    const {inputText, setInputText} = props;
    console.log(inputText)
    setInputText(inputText)
}