import React from "react";

function TranslatedText(Props) {
  const { translatedText } = Props;
  return <div className="text-container">{translatedText}</div>;
}

export default TranslatedText;
