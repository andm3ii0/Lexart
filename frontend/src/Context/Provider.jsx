import { useEffect, useState } from 'react';
import Context from './Context';
import { data } from '../data/data';
import { finalizeChat, getUserFromServer, login, registerUser } from '../helper/helper';

function Provider({ children }) {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({
    id: '',
    name: ''
  });
  const [messagesToDB, setMessagesToDB] = useState([])

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const startConversation = () => {
      setMessages([...messages, data.startMessage])
    }
    startConversation()
  }, [])

  useEffect(() => {
    const messageObserver = async () => {
      if (messages.length > 1) {
        const palavraChaveRegex = /(hello|good|i want)/i;
        const lastMessage = messages[messages.length - 1].text;
        console.log(lastMessage);
        if (messages[messages.length - 1].isUser && !loggedIn) {
          if (palavraChaveRegex.test(lastMessage)) {
            setMessages([...messages, data.loginMessage, data.userLoginMessage])
            setMessagesToDB([...messagesToDB, data.loginMessage, data.userLoginMessage])
          }
          else if (messages[messages.length - 2] === data.userLoginMessage) {
            setUser({ id: user.id, name: messages[messages.length - 1].text })
            const response = await getUserFromServer(messages[messages.length - 1].text);
            setMessages([...messages, response])
            setMessagesToDB([...messagesToDB, response])
          }
          else if (messages[messages.length - 2] === data.notFoundUserMessage) {
            const response = await registerUser(user.name, messages[messages.length - 1].text);
            setMessages([...messages.slice(0, -1), response.message])
            setMessagesToDB([...messagesToDB.slice(0, -1), response.message])
            setUser({ id: response.data.id, name: response.data.name })
            setLoggedIn(true)
          }
          else if (messages[messages.length - 2] === data.getPasswordMessage) {
            const response = await login(user.name, messages[messages.length - 1].text);
            setMessages([...messages.slice(0, -1), response.message])
            setMessagesToDB([...messagesToDB.slice(0, -1), response.message])
            setUser({ id: response.data.id, name: response.data.name })
            setLoggedIn(true)
          }
          else {
            if (messages[messages.length - 1].isUser) {
              setMessages([...messages, data.genericMessage])
              setMessagesToDB([...messagesToDB, data.genericMessage])
            }
          }
        }
        if (loggedIn && messages[messages.length - 1].isUser) {
          if (/(goodbye)/i.test(lastMessage)) {
            const response = await finalizeChat(user, [...messagesToDB, data.goodbyeMessage]);
            setMessages([...messages, response.message])
            setMessagesToDB([])
          }
          else if (palavraChaveRegex.test(lastMessage) && lastMessage != data.helloMessage.text) {
            setMessages([...messages, data.helloMessage])
            setMessagesToDB([...messagesToDB, data.helloMessage])
          }
          else if (/(loan)/i.test(lastMessage)) {
            setMessages([...messages, data.loanMessage])
            setMessagesToDB([...messagesToDB, data.loanMessage])
          }
          else {
            if (messages[messages.length - 1].isUser) {
              setMessages([...messages, data.genericMessage])
              setMessagesToDB([...messagesToDB, data.genericMessage])
            }
          }
        }
      }
    }
    setTimeout(messageObserver, 1000);
  }, [messages])

  return (
    <Context.Provider value={{ messages, setMessages, messagesToDB, setMessagesToDB }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;