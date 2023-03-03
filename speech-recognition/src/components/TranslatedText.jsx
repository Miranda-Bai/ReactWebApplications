import React from "react";

function TranslatedText(Props) {
  const { text } = Props;
  return <div className="text-container">{text}</div>;
}

export default TranslatedText;
