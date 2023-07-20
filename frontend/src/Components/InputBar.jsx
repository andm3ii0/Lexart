import { useContext, useState } from "react";
import { InputBarContainer, InputField, SendButton } from "../Styles/InputBar";
import Context from "../Context/Context";
import send from '../Images/send.svg'

function InputBar() {
  const context = useContext(Context)

  const [text, setText] = useState('')

  const handleClick = async () => {
    if (text !== '') {
      const message = {
        isUser: true,
        text,
        date: new Date()
      }
      context.setMessages([...context.messages, message])
      context.setMessagesToDB([...context.messagesToDB, message])
      setText("")
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <InputBarContainer>
      <InputField
        onKeyDown={handleKeyPress}
        value={text} onChange={
          ({ target }) => {
            setText(target.value)
          }
        } type="text" placeholder="Digite sua mensagem" />
      <SendButton
        onClick={handleClick}>
        <img src={send} alt="" />
      </SendButton>
    </InputBarContainer>
  );
}

export default InputBar;