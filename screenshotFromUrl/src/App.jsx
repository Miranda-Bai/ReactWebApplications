import { createRef, useEffect } from "react";
import {useScreenshot} from "use-react-screenshot"

function App() {
  
  const url='https://rr3---sn-uo1-53as.googlevideo.com/videoplayback?expire=1677752759&ei=VyUAZNi9KojZ9QPMlaH4CA&ip=122.62.41.231&id=o-AMFhSk8O8jSUOD8rq1kIS4Oq2pOPfKylsBnXilFd-5qh&itag=22&source=youtube&requiressl=yes&mh=7c&mm=31%2C29&mn=sn-uo1-53as%2Csn-ntqe6n7r&ms=au%2Crdu&mv=m&mvi=3&pl=21&initcwndbps=1146250&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=212.091&lmt=1674233742818000&mt=1677730864&fvip=5&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgby8V-3NRm13MJI-IqWVwffyymZTX2-GIt07gaZNrEXkCIB7YK_-ZplNTjZWyw0-Wa2jAz2Ssl0YumMIRBKKJ1Km7&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgY0vSoGhYe_skmJ_tNq4E5ZjZTZatjnT1IyX1DGzVX5gCIQCqccujwY5-70bxGG9pB_mqSLFXFMqAd5jIH3FuWhtFjg%3D%3D'

  const [image, takeScreenshot] = useScreenshot()
  const ref = createRef(null)
  useEffect(() => {
    takeScreenshot(ref.current)
    console.log(image)
  })
  
  return (
    <div>
      <iframe ref={ref} src={url} title="Website" />
      <img src={image} alt="" />
    </div>
  );
}

export default App
