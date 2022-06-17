import { ISubmitChat } from "../customTypes";

export const submitChat = (props: ISubmitChat) => {
    const {inputText} = props;
    console.log(inputText)
}