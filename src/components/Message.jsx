import React from "react";

const Message = ({ text }) => {
  if (!text) return <></>;
  return <p>{text}</p>;
};

export default Message;
