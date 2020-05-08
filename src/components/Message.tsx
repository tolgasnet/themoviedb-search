import React, { FC } from "react";

interface MessageProps {
  text: string;
}

const Message: FC<MessageProps> = ({ text }) => {
  if (!text) return <></>;
  return <p>{text}</p>;
};

export default Message;
