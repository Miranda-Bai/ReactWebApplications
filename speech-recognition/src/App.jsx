import {useState, useEffect} from "react"
import SpeechToText from "./components/SpeechToText";
import TranslatedText from "./components/TranslatedText";
import {myTranslator} from "./utilities/translator";

function App() {
  const [text, setText] = useState();
  let translatedText = ""
  useEffect(() => {
    console.log("text: ", text)
    translatedText = myTranslator(text);
  }, [text]);

  return (
    <div className="app">
      <SpeechToText setText={setText} />
      <TranslatedText translatedText={translatedText} />
    </div>
  );
}

export default App;
