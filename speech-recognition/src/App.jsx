import {useState, useEffect} from "react"
import SpeechToText from "./components/SpeechToText";
import TranslatedText from "./components/TranslatedText";
import {myTranslator} from "./utilities/translator";

function App() {
  const [text, setText] = useState();
  useEffect(() => {
    console.log("text: ", text)
    myTranslator(text);
  }, [text]);

  return (
    <div className="app">
      <SpeechToText setText={setText} />
      <TranslatedText text={text} />
    </div>
  );
}

export default App;
