import React, { FunctionComponent } from "react";

interface MessageProps {
  text: string;
}

const Message: FunctionComponent<MessageProps> = ({ text }) => {
  if (!text) return null;
  return <p>{text}</p>;
};

export default Message;
