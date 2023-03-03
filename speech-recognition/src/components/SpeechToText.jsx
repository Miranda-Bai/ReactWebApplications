import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";

function SpeechToText(Props) {
 const {setText} = Props;
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleChangeTranscript = (e)=>{
    return setText(e.target.value)
  }
  return (
    <div className="speech-container">
      <div className="speech-controller">
        <span>Microphone: {listening ? "on" : "off"}</span>
        <div className="speech-btn">
          <button
            onClick={() =>{
                SpeechRecognition.startListening({ continuous: true })
            }
              
            }
          >
            Start
          </button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
        </div>
      </div>
      <textarea className="text-container" value={transcript} onChange={(e)=> handleChangeTranscript(e)}></textarea>
    </div>
  );
}

export default SpeechToText;
