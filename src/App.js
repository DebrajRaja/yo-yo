// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       await axios.get("/messages/sync").then((response) => {
  //         setMessages(response.data)
  //       })
  //     } catch(e) {
  //       console.log(e)
  //     }
  //   }
  //   fetchData();
  // }, []);
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data)
    })
  }, []);
  useEffect(() => {
    // when the app load run this code once
    const pusher = new Pusher('aa34260c45d6f4c35f73', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      <div className='app__body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
