import { useContext, useState } from "react";
import { InputBarContainer, InputField, SendButton } from "../Styles/InputBar";
import Context from "../Context/Context";

function InputBar() {
  const context = useContext(Context)

  const [text, setText] = useState('')

  const handleClick = async () => {
    const message = {
      isUser: true,
      text,
      date: new Date()
    }
    context.setMessages([...context.messages, message])
    context.setMessagesToDB([...context.messagesToDB, message])
    setText("")
  }

  return (
    <InputBarContainer>
      <InputField value={text} onChange={
        ({ target }) => {
          setText(target.value)
        }
      } type="text" placeholder="Digite sua mensagem" />
      <SendButton onClick={handleClick}>Enviar</SendButton>
    </InputBarContainer>
  );
}

export default InputBar;