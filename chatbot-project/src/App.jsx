import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'



function App(){

         const [chatMessages, setChatMessages] = useState(
          [{
          message: "Hello chatbot",
          sender: "user",
          id: 'id1'
        },
        {
          message: "Hello! How can I help you?",
          sender: "robot",
          id: 'id2'
        },
        {
          message: "Can you get me todays date? ",
          sender: "user",
          id: 'id3'
        },
        {
          message: "Sure! Today's date is 6/6/2024",
          sender: "robot",
          id: 'id4'
        }]
        )
        // const chatMessages = array[0];
        // const setChatMessages = array[1];  
        //const {chatMessages, setChatMessages} = array;

        return (
          <div className="app-container">
           
            <ChatMessages 
              chatMessages={chatMessages}
            /> 
             <ChatInput
             chatMessages={chatMessages}
             setChatMessages={setChatMessages}
          />
          </div>
        );
       }

export default App
