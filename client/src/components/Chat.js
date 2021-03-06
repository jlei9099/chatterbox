import React, { useState, useEffect } from "react";
import io from "socket.io-client";

var socket = io.connect('http://127.0.0.1:5000/');

const Chat = () => {

    const [messages, setMessages] = useState([""]);
    const [message, setMessage] = useState("");

    useEffect(() => {
      getMessages();
    }, [messages.length]);

    const getMessages = () => {
      socket.on("message", msg => {
        setMessages([...messages, msg]);
      });
    };

    const onChange = e => {
      setMessage(e.target.value);
    };

    const onClick = () => {
      if (message !== "") {
        socket.emit("message", message);
        setMessage("");
      }
    };

    return (
      <div>
        {messages.length > 0 &&
          messages.map(msg => (
            <div>
              <p>{msg}</p>
            </div>
          ))}
        <input value={message} name="message" onChange={e => onChange(e)} />
        <button onClick={() => onClick()}>Send</button>
      </div>
    );
};

export default Chat;